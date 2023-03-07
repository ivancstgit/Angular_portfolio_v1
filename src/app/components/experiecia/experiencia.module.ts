import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciaComponent } from './experiencia.component';
import { TitleModule } from 'src/app/windgets/title/title.module';
import { ImagenItemModule } from 'src/app/windgets/imagen-item/imagen-item.module';



@NgModule({
  declarations: [
    ExperienciaComponent
  ],
  imports: [
    CommonModule,
    TitleModule,
    ImagenItemModule,
  ],
  exports: [ExperienciaComponent]
})
export class ExperienciaModule { }
