import { Component, OnInit} from '@angular/core';
import { IModal } from 'src/app/windgets/modal/modal.interface';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent{
items: Array<IModal> = [];
ngOnInit(){
  this.items.push ({
    title: "Argentina Programa",
    image: "https://sursantiago.com.ar/wp-content/uploads/2022/02/argentina-programa-llego-a-los-santiaguenos.jpg",
    description: "Conocimientos de desarrollo full stack vistos en Argentina Programa y la creacion de un portfolio web, con el frontend desplegado en Firebase, el backend en Render y la utilizacion de una base de datos en Clever Cloud",
    state: "Finalizado",
    icon: "fa-solid fa-check",
})
}
}
