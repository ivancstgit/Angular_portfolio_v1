import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { TitleModule } from 'src/app/windgets/title/title.module';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    TitleModule
  ],
  exports: [FooterComponent]
})
export class FooterModule { }
