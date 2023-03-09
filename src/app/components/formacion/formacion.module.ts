import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormacionComponent } from './formacion.component';
import { TitleModule } from 'src/app/windgets/title/title.module';
import { ImagenItemModule } from 'src/app/windgets/imagen-item/imagen-item.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FormacionComponent
  ],
  imports: [
    CommonModule,
    TitleModule,
    ImagenItemModule,
    RouterModule
  ],
  exports: [FormacionComponent]
})
export class FormacionModule { }
