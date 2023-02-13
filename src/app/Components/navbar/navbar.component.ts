import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogged=false;

  constructor(private tokenService:TokenService, private routes:Router){

  }
  ngOnInit(): void { 
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }
  }

  onLogout(){
    this.tokenService.logOut();
    this.routes.navigate(['/login']);
  }
}
