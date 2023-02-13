import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  items: Array<any> = [];
  public aboutSkills!: Array<any> ;
  
  constructor(private apiService:ApiService){}
  
  ngOnInit(){
    this.cargarAbout();
  }

  cargarAbout(){
    this.aboutSkills= [
      {
        "id":1,
        "name": "Trabajo en equipo",
        "porcent": "80",
        "color": "amarillo"
      },
      {
        "id":2,
        "name": "Resolucion de problemas",
        "porcent": "75",
        "color": "azul"
      },
      {
        "id":3,
        "name": "Concentracion",
        "porcent": "70",
        "color": "rojo"
      },
      {
        "id":4,
        "name": "Proactividad",
        "porcent": "80",
        "color":"gris"
      },
      {
        "id":5,
        "name": "Esfuerzo",
        "porcent": "100",
        "color": "verde"
      }];
       
       for (let i = 0; i < this.aboutSkills.length; i++) {
        this.items.push ({
          name: this.aboutSkills[i].name,
          porcent: this.aboutSkills[i].porcent,
          style: "width: "+ this.aboutSkills[i].porcent + "%",
          color: this.colorPicker(this.aboutSkills[i].color),}) 
       }
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

  