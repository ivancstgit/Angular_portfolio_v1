import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private api:ApiService) {
   }
    
   login(username: any, password: any){
/*
    return this.api.onLogin(username,password).pipe(
      tap((response:any) =>{
        localStorage.setItem("auth_token", response.token);
      })
    );*/
  }



}
