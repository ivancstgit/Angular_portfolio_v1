import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IPortfolio } from '../models/IPortfolio';
import { ApiService } from '../service/api.service';
import { IModal } from '../windgets/modal/modal.interface';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarExpComponent implements OnInit {
  data!: IModal;
  id!: string;
  portfolio!: IPortfolio;
  desc!: string;
  img!: string;
  title!: string;
  state!: boolean;
  type!: string;
  selectedIndexType = 0;
  selectedIndexState = 0;

  constructor(
    private api: ApiService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.api.listaPortfolioById(this.id).subscribe(
      (res: any) => {
        this.data = res;
      });

  }


onUpdate(): void {
  this.loadInputSelect()


    this.portfolio = new IPortfolio(
    this.desc,
    this.img,
    this.title,
    this.state,
    this.type)

    this.api.updatePortfolio(this.id, this.portfolio).subscribe(
      data => {
        this.toastr.success('Actualizado correctamente', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/home']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/home']);
      }
    )
}



loadInputSelect() {
  this.desc = (<HTMLTextAreaElement>document.getElementById('desc')).value;
  this.img = (<HTMLInputElement>document.getElementById('imagen')).value;
  this.title = (<HTMLInputElement>document.getElementById('titulo')).value;
  if ((<HTMLSelectElement>document.getElementById('state')).value == "Finalizado") {
    this.state = true
  } else {
    this.state = false
  }
  this.type = (<HTMLSelectElement>document.getElementById('type')).value;
}
}
