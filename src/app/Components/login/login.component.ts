import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/Services/api.service';
import { AuthService } from 'src/app/Services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  LogVisibility="visibility: visible;"
  SignVisibility="visibility: hidden;"


  signupUsers: any[] = [];
  signupObj: any = {
    name: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    email: '',
    password: ''
  };
  
  
  constructor(private api:ApiService,private router:Router){

  };

  submitForm(){
    /*
   if(this.form.invalid){
      return;
    }

    this.authServ.login(this.form.get('username')?.value,this.form.get('password')?.value).subscribe(response =>{
        this.router.navigate(['home']);        
      });
*/
  }
onSignup(){
this.signupUsers.push(this.signupObj)
localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
this.signupObj = {
  name: '',
  email: '',
  password: ''
};


}

  onLogin(){
    /*
    this.api.onLogin2(this.loginObj);
    */
    this.api.onLogin(this.loginObj).subscribe((res:any)=>{
          localStorage.setItem('token', res.token);
          this.router.navigate(['home']);
    })

    /*

    console.log('Antes de getPesonas2');
    this.api.getPersonas2();
    console.log('Despues de getPersonas2');
    */
  }



  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData!=null){
      this.signupUsers = JSON.parse(localData);
    }
  }

}
