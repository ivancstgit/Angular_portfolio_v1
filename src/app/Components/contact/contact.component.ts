import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

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
    
       this.miPortfolio=[
        {
          "id":1,
          "icon": "fab fa-brands fa-instagram",
          "social_name": "@ivancstt",
          "link": "https://www.instagram.com/"
        },
        {
          "id":2,
          "icon": "fab fa-brands fa-linkedin",
          "social_name":"linkedin-accout",
          "link": "https://www.linkedin.com/in/ivan-casatti-942214236"
        },
        {
          "id":3,
          "icon": "fa-solid fa-mobile",
          "social_name":"+543543617090",
          "link": ""
        },
        {
          "id":4,
          "icon": "fab fa-brands fa-discord",
          "social_name":"IvanCasatti#8581",
          "link": "https://discord.com/"
        },
        { "id":5,
          "icon": "fa-solid fa-envelopes-bulk",
          "social_name":"casativan@gmail.com",
          "link": ""
        },
        {
          "id":6,
          "icon": "fab fa-brands  fa-github",
          "social_name":"IvanCsTGit",
          "link": "https://github.com/IvanCsTGit"
        }
      ];


       for (let i = 0; i < this.miPortfolio.length; i++) {
        this.items.push ({
          icon: this.miPortfolio[i].icon,
          social_name: this.miPortfolio[i].social_name,
          link: this.miPortfolio[i].link,
          })
        }
  }

}
