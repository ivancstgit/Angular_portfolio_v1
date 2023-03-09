import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { TitleModule } from 'src/app/windgets/title/title.module';
import { ImagenItemModule } from 'src/app/windgets/imagen-item/imagen-item.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    TitleModule,
    ImagenItemModule,
    RouterModule
  ],
  exports: [PortfolioComponent]
})
export class PortfolioModule { }
