import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { IPortfolio } from '../models/IPortfolio';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoExpComponent implements OnInit {
  data!:any;
  id!:string;
  portfolio!: IPortfolio;
  desc!:string;
  img!:string;
  title!:string;
  state!:boolean;
  type!:string;

  constructor(
    private api: ApiService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    
    this.loadInputSelect()
    
    this.portfolio = new IPortfolio(
      this.desc,
      this.img,
      this.title,
      this.state,
      this.type)

  if(this.desc!="" && this.img!="" && this.title!=""){
    this.api.savePortfolio(this.portfolio).subscribe(
    data=>{
      this.toastr.success('Creado correctamente', 'OK', {
        timeOut: 3000, positionClass: 'toast-top-center'
      });
      this.router.navigate(['/home']);
    },
    err => {
      this.toastr.error(err.error.mensaje, 'Fail', {
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
      this.router.navigate(['/home']);
    }
  )
}else{
    this.toastr.error('Complete todos los campos','Fail',{
      timeOut: 1500,  positionClass: 'toast-top-center'});
  }
    
  }

  loadInputSelect(){
    this.desc=(<HTMLTextAreaElement>document.getElementById('desc')).value;
    this.img = (<HTMLInputElement>document.getElementById('imagen')).value;
    this.title = (<HTMLInputElement>document.getElementById('titulo')).value;
    if((<HTMLSelectElement>document.getElementById('state')).value=="Finalizado"){
      this.state = true
    }else{
      this.state = false
    }
    this.type = this.activatedRoute.snapshot.params['type'];
  }



  
}
