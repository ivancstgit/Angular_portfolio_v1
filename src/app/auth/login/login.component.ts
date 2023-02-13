import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
isLogged=false;
isLogginFail=false;
loginUsuario!:LoginUsuario;
nombreUsuario!:string;
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
      this.isLogginFail=false;
      this.roles = this.tokenService.getAuthorities();

    }

    console.log(this.isLogged);
  }


  onLogin(){
   this.loginUsuario = new LoginUsuario(this.nombreUsuario,this.password);

    this.authService.login(this.loginUsuario).subscribe(data=>{
      this.isLogged=true;
      this.toastr.success("Bienvenido " + data.nombreUsuario, "OK", {
        timeOut:3000, positionClass: "toast-top-center"
        
      })
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate(['home']);
    },err => {
      this.isLogged=false;
      this.errMsj = err.error.menssage;
      this.toastr.error(this.errMsj, "Fail", {
        timeOut:3000, positionClass: "toast-top-center"
      })
    })
              
  }


}
