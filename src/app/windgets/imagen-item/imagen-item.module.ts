import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenItemComponent } from './imagen-item.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    ImagenItemComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [ImagenItemComponent]
})
export class ImagenItemModule { }
