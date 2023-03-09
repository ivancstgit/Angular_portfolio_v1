import { Component, Input, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { IContact } from 'src/app/models/IContact';
import { ApiService } from 'src/app/service/api.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit{
  @Input() info:any;
  data:IContact = new IContact("","","");
  mostrarInput=false;
  icon!:string;
  social_name!:string;
  link!:string;
  contact!:IContact;
  isAdmin=false;

  constructor(private api:ApiService, private toastr:ToastrService,private tokenService:TokenService){}

ngOnInit(): void {
  this.isAdmin=this.tokenService.isAdmin();
  this.api.listaContactById(this.info.id).subscribe(
    (res:any)=>{
      this.data = res;
  });
}


  borrar(){
    var respuesta = confirm("¿Confirma la Eliminacion del Elemento?");
    
    if(respuesta){
      this.api.deleteContact(this.info.id).subscribe(
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

  
  toggleInputNew(){
    this.mostrarInput = !this.mostrarInput;
  }

  onUpdate(){
    this.loadInputSelect()
    
    this.contact = new IContact(
      this.icon,
      this.social_name,
      this.link)

    this.api.updateContact(this.info.id,this.contact).subscribe(
    data=>{
      this.toastr.success('Actualizado correctamente', 'OK', {
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
  }

  loadInputSelect(){
    this.icon = (<HTMLInputElement>document.getElementById('icon'+this.info.id)).value;
    this.social_name = (<HTMLInputElement>document.getElementById('socialName'+this.info.id)).value;
    this.link = (<HTMLSelectElement>document.getElementById('link'+this.info.id)).value;

  }

}
