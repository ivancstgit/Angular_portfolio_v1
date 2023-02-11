import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleModule } from 'src/app/Widgets/title/title.module';
import { HeaderComponent } from './header.component';




@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TitleModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
