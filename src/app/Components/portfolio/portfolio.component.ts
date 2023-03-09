import { Component, OnInit} from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { TokenService } from 'src/app/service/token.service';
import { IModal } from 'src/app/windgets/modal/modal.interface';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{
titulo="proyect";
items: Array<IModal> = [];
isAdmin=false;

public portfolio!: Array<any> ;

constructor(private apiService:ApiService, private tokenService:TokenService){}

ngOnInit(){
  this.isAdmin = this.tokenService.isAdmin();
  this.cargarPortfolio();
}

cargarPortfolio(){
     this.apiService.listaPortfolioByType("proyect").subscribe(
      data => {
        this.portfolio=data;
      for (let i = 0; i < this.portfolio.length; i++) {
        if(this.portfolio[i].state){
          var estado = "Finalizado";
          var icono = "fa-solid fa-check";
        }else{
          var estado = "En Curso";
          var icono = "fa-solid fa-x";
        }
        this.items.push ({
        id:this.portfolio[i].id,
        title: this.portfolio[i].title,
        image: this.portfolio[i].image,
        description: this.portfolio[i].description,
        state: estado,
        icon: icono,
        type: this.portfolio[i].type}) 
     }}
    );
  }
}
