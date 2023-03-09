import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IAbout } from 'src/app/models/IAbout';
import { ApiService } from 'src/app/service/api.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  items: Array<any> = [];
  public aboutSkills!: Array<any> ;
  mostrarInput = false;
  nom!:string;
  porcent!:string;
  color!:string;
  about!:IAbout;
  isAdmin = false;
  
  constructor(private api:ApiService, private toastr:ToastrService, private tokenService:TokenService){}
  
  ngOnInit(){
    this.isAdmin = this.tokenService.isAdmin();
    this.cargarAbout();
  }

  cargarAbout(){
    
       this.api.listaAbout().subscribe(
        data => {
        this.aboutSkills = data;

        for (let i = 0; i < this.aboutSkills.length; i++) {
        this.items.push ({
          id: this.aboutSkills[i].id,
          name: this.aboutSkills[i].name,
          porcent: this.aboutSkills[i].porcent,
          style: "width: "+ this.aboutSkills[i].porcent + "%",
          color: this.colorPicker(this.aboutSkills[i].color),}) 
       }
      });
  }
  
  

    
  public colorPicker(color:string):string{

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
  
  toggleInputNew(){
    (<HTMLInputElement>document.getElementById('nuevoNom')).value='';
    (<HTMLInputElement>document.getElementById('nuevoPorc')).value='';
    (<HTMLSelectElement>document.getElementById('color')).selectedIndex=0;
    this.mostrarInput = !this.mostrarInput;
  }

  onCreate(): void {
    
    this.loadInputSelect()
    
    this.about = new IAbout(
      this.nom,
      this.porcent,
      this.color)

      if(this.nom!="" && this.porcent!="" && this.color!=""){
    this.api.saveAbout(this.about).subscribe(
    data=>{
      this.toastr.success('Creado correctamente', 'OK', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });
      location.reload();
    },
    err => {
      this.toastr.error(err.error.mensaje, 'Fail', {
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
    }
  )
}else{
    this.toastr.error('Complete todos los campos','Fail',{
      timeOut: 1500,  positionClass: 'toast-top-center'});
  }
    
  }

  loadInputSelect(){
    
    this.nom = (<HTMLInputElement>document.getElementById('nuevoNom')).value;
    this.porcent = (<HTMLInputElement>document.getElementById('nuevoPorc')).value;
    this.color = (<HTMLSelectElement>document.getElementById('color')).value;

  }



  }

  
  