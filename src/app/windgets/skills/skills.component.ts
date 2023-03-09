import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AboutModule } from 'src/app/components/about/about.module';
import { IAbout } from 'src/app/models/IAbout';
import { ApiService } from 'src/app/service/api.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  mostrarInput=false;
  @Input() info:any;
  data:IAbout = new IAbout("","","");
  nom!:string;
  porcent!:string;
  color!:string;
  about!:IAbout;
  isAdmin=false;

  constructor(private api:ApiService,
     private toastr:ToastrService,
     private tokenService:TokenService){
  }

  borrar(){
    var respuesta = confirm("¿Confirma la Eliminacion del Elemento?");
    
    if(respuesta){
      this.api.deleteAbout(this.info.id).subscribe(
        data=>{
          this.toastr.success('Eliminado correctamente', 'OK', {
            timeOut: 2000, positionClass: 'toast-top-center'
          });
        },
        err => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 2000,  positionClass: 'toast-top-center',
          });
        });
      setTimeout(() => {
          location.reload();
      }, 3000);
    }
  }

  ngOnInit(){
    this.isAdmin=this.tokenService.isAdmin();

    this.api.listaAboutById(this.info.id).subscribe(
      (res:any)=>{
        this.data = res;
    });
    
  }

  toggleInputNew(){
    this.mostrarInput = !this.mostrarInput;
  }

  onUpdate(){
    this.loadInputSelect();
    this.about = new IAbout(
      this.nom,
      this.porcent,
      this.color)
  if(this.nom!="" && this.porcent!="" && this.color!=""){
    this.api.updateAbout(this.info.id, this.about).subscribe(
      data=>{
        this.toastr.success('Actualizado correctamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        })
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
    this.nom=(<HTMLInputElement>document.getElementById('name'+this.info.id)).value;
    this.porcent = (<HTMLInputElement>document.getElementById('porcent'+this.info.id)).value;
    this.color = (<HTMLSelectElement>document.getElementById('color'+this.info.id)).value;
  }

}
