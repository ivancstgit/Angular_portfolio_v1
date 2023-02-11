import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  items: Array<any> = [];
  var!:string;
  public miPortfolio!: Array<any> ;
  
  constructor(private api:ApiService){}
  
  ngOnInit(){
    /*
    this.datosPortfolio.get('http://localhost:3000/about').
    subscribe(data =>{
       this.miPortfolio=data;
       for (let i = 0; i < this.miPortfolio.length; i++) {
        this.items.push ({
          name: this.miPortfolio[i].name,
          porcent: this.miPortfolio[i].porcent,
          style: "width: "+ this.miPortfolio[i].porcent + "%",
          color: this.colorPicker(this.miPortfolio[i].color),
          
          }) 
       }    
    })
    */
  }

  public colorPicker(color:string):String{

    switch (color) {
      case "rojo":
        return "bg-danger";
      case "azul":
        return "bg-info";
      case "amarillo":
        return "bg-warning";
      case "verde":
        return "bg-success";
      case "gris":
        return "bg-secondary";
    }
    return "";   
  }
  
  }

  