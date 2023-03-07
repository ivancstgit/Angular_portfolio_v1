import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormacionComponent } from './formacion.component';
import { TitleModule } from 'src/app/windgets/title/title.module';
import { ImagenItemModule } from 'src/app/windgets/imagen-item/imagen-item.module';



@NgModule({
  declarations: [
    FormacionComponent
  ],
  imports: [
    CommonModule,
    TitleModule,
    ImagenItemModule,
  ],
  exports: [FormacionComponent]
})
export class FormacionModule { }
