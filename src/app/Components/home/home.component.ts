import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLogged=false
  nombreUsuario!:string;

  constructor(private tokenService:TokenService) { }

  ngOnInit() {
    
    if(this.tokenService.getToken()){
      this.nombreUsuario=this.tokenService.getUserName()!;
      this.isLogged=true;
    }else{
      this.nombreUsuario='';
      this.isLogged=false;
    }
    
    
    
  }

}
