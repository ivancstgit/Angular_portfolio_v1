import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  persona: Persona;

  constructor(
    private apiService: ApiService,
    ) { 
      this.persona= new Persona('','','');
    }

  ngOnInit() {
    this.cargarPersona();
  }

  cargarPersona(): void {
    this.apiService.listaPersonas().subscribe(
      data => {
        this.persona = data[0];
      },
      err => {
        console.log(err);
      }
    );
  }


}
