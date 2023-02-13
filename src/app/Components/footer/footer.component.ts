import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit { 
  datos:any;

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.cargarFooter();
  }
  cargarFooter(){
    this.datos= {
        "localidad": "Cordoba, Argentina",
        "calle": "Calle",
        "lenguajes": "Español, Ingles Basico"
      }
  }
}