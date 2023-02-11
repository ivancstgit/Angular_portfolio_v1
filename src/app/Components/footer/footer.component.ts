import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit { 
  miPortfolio:any = [];

  constructor(private api:ApiService){}

  ngOnInit(): void {
    /*
    this.datosPortfolio.get('http://localhost:3000/footer').
    subscribe(data =>{
       this.miPortfolio=data[0];
    })*/
  }

}