import { Component, OnInit} from '@angular/core';

import { ApiService } from 'src/app/Services/api.service';
import { IModal } from 'src/app/Widgets/modal/modal.interface';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
items: Array<IModal> = [];

public miPortfolio!: Array<any> ;

constructor(private api:ApiService){}

ngOnInit(){
  /*

  this.miPortfolio= data.portfolio;

  for (let i = 0; i < this.miPortfolio.length; i++) {
    this.items.push ({
      title: this.miPortfolio[i].title,
      image: this.miPortfolio[i].image,
      description: this.miPortfolio[i].description,}) 
   }  

  this.datosPortfolio.get('http://localhost:3000/portfolio').
  subscribe(data =>{
     this.miPortfolio=data;
     for (let i = 0; i < this.miPortfolio.length; i++) {
      this.items.push ({
        title: this.miPortfolio[i].title,
        image: this.miPortfolio[i].image,
        description: this.miPortfolio[i].description,}) 
     }    
  })*/
}

}
