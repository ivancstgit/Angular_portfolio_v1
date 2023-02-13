import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
isLogged=false;
nuevoUsuario!:NuevoUsuario;
nombre!:string;
nombreUsuario!:string;
email!:string;
password!:string;
errMsj!:string;
roles:string[] =[];
  
  
  constructor(private authService:AuthService,
    private router:Router,
     private tokenService:TokenService,
     private toastr:ToastrService){}
  
  ngOnInit(){
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }

    console.log(this.isLogged);
  }


  onSignUp(){
   this.nuevoUsuario = new NuevoUsuario(this.nombre,this.nombreUsuario,this.email,this.password);

    this.authService.nuevo(this.nuevoUsuario).subscribe(data=>{
      this.toastr.success("Cuenta Creada", "OK", {
        timeOut:3000, positionClass: "toast-top-center"
      })
      this.router.navigate(['/login']);
    },err => {
      this.errMsj = err.error.menssage;
      this.toastr.error(this.errMsj, "Fail", {
        timeOut:3000, positionClass: "toast-top-center",
      })
    })
              
  }


}
