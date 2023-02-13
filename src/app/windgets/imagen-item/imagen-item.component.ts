import { Component, Input, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { IModal } from '../modal/modal.interface';

@Component({
  selector: 'app-imagen-item',
  templateUrl: './imagen-item.component.html',
  styleUrls: ['./imagen-item.component.css']
})
export class ImagenItemComponent implements OnInit{
  
  @Input() info!:IModal;
  constructor (private modalService: NgbModal){
  }
  ngOnInit(): void {  }

  open() {
		const modalRef = this.modalService.open(ModalComponent);
		modalRef.componentInstance.info = this.info;
	}
}
