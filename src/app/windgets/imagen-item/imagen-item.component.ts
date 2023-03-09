import { Component, Input, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';
import { TokenService } from 'src/app/service/token.service';
import { ModalComponent } from '../modal/modal.component';
import { IModal } from '../modal/modal.interface';

@Component({
  selector: 'app-imagen-item',
  templateUrl: './imagen-item.component.html',
  styleUrls: ['./imagen-item.component.css']
})
export class ImagenItemComponent implements OnInit{
  @Input() info!:IModal;
  isAdmin=false;
  constructor (private modalService: NgbModal,
     private api: ApiService,
     private toastr:ToastrService,
     private tokenService:TokenService){
  }
  ngOnInit(): void {
    this.isAdmin=this.tokenService.isAdmin();
    }

  open() {
		const modalRef = this.modalService.open(ModalComponent);
		modalRef.componentInstance.info = this.info;
	}


  borrar(){
    var respuesta = confirm("¿Confirma la Eliminacion del Elemento?");
    if(respuesta){
      this.api.deletePortfolio(this.info.id).subscribe(
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
}
