import { Component } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  items: Array<any> = [];
  var!:string;
  public miPortfolio!: Array<any> ;
  
  constructor(private api:ApiService){}
  
  ngOnInit(){
    /*
    this.datosPortfolio.get('http://localhost:3000/contact').
    subscribe(data =>{
       this.miPortfolio=data;
       for (let i = 0; i < this.miPortfolio.length; i++) {
        this.items.push ({
          icon: this.miPortfolio[i].icon,
          social_name: this.miPortfolio[i].social_name,
          link: this.miPortfolio[i].link,
          
          
          }) 
       } 
    })
    */
  }

}
