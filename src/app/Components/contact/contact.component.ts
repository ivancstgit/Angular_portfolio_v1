import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IContact } from 'src/app/models/IContact';
import { ApiService } from 'src/app/service/api.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  items: Array<any> = [];
  var!:string;
  mostrarInput=false;
  public miPortfolio!: Array<any>;
  icon!:string;
  social_name!:string;
  link!:string;
  contact!:IContact;
  isAdmin=false;
  
  constructor(private api:ApiService,private toastr:ToastrService,private tokenService:TokenService){}
  
  ngOnInit(){
      this.isAdmin = this.tokenService.isAdmin();
      
      this.api.listaContact().subscribe(
        data=>{
          this.miPortfolio=data
          for (let i = 0; i < this.miPortfolio.length; i++) {
           this.items.push ({
             id: this.miPortfolio[i].id,
             icon: this.miPortfolio[i].icon,
             social_name: this.miPortfolio[i].social_name,
             link: this.miPortfolio[i].link,
             })
           }
        });
       
        
  }


  toggleInputNew(){
    (<HTMLInputElement>document.getElementById('socialName')).value='';
    (<HTMLInputElement>document.getElementById('icon')).value='';
    (<HTMLInputElement>document.getElementById('link')).value='';
    this.mostrarInput = !this.mostrarInput;
  }

  onCreate(){

    this.loadInputSelect()
    
    this.contact = new IContact(
      this.icon,
      this.social_name,
      this.link)

      if(this.icon!="" && this.social_name!=""){
    this.api.saveContact(this.contact).subscribe(
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
      this.toastr.error('Complete los campos icono y social name','Fail',{
        timeOut: 1000,  positionClass: 'toast-top-center'});
    }
  }

  loadInputSelect(){
    
    this.icon = (<HTMLInputElement>document.getElementById('icon')).value;
    this.social_name = (<HTMLInputElement>document.getElementById('socialName')).value;
    this.link = (<HTMLSelectElement>document.getElementById('link')).value;

  }


 
}
