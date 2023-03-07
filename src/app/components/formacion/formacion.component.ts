import { Component, OnInit} from '@angular/core';
import { IModal } from 'src/app/windgets/modal/modal.interface';


@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent{
  items: Array<IModal> = [];

  ngOnInit(){
    this.items.push ({
      title: "Estudios Universitarios",
      image: "https://comercioyjusticia.info/wp-content/uploads/2018/04/UTN.jpg",
      description: "Cursando materias de Ingenieria en sistemas de informacion 4to año en la Universidad Tecnologica Nacional Facultad Regional Cordoba",
      state: "En Curso",
      icon: "fa-solid fa-x",
  },
  {
      title: "Secundaria",
      image: "https://p4.wallpaperbetter.com/wallpaper/626/886/462/book-math-school-stats-wallpaper-preview.jpg",
      description: "Estudios primarios y secundarios completos",
      state: "Finalizado",
      icon: "fa-solid fa-check",
  })

  }
}
