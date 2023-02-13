import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { IModal } from 'src/app/windgets/modal/modal.interface';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
items: Array<IModal> = [];

public portfolio!: Array<any> ;

constructor(private apiService:ApiService){}

ngOnInit(){
  this.cargarPortfolio();
}

cargarPortfolio(){
     this.apiService.listaPortfolio().subscribe(
      data => {
        this.portfolio=data;
      for (let i = 0; i < this.portfolio.length; i++) {
      this.items.push ({
        title: this.portfolio[i].title,
        image: this.portfolio[i].image,
        description: this.portfolio[i].description,}) 
     }    
      },
      err => {
        console.log(err);
      }
    );
  }
}
