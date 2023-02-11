import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenItemComponent } from './imagen-item.component';



@NgModule({
  declarations: [
    ImagenItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ImagenItemComponent]
})
export class ImagenItemModule { }
