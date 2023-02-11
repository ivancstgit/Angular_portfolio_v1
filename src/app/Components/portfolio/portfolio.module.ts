import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { TitleModule } from 'src/app/Widgets/title/title.module';
import { ImagenItemModule } from 'src/app/Widgets/imagen-item/imagen-item.module';



@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CommonModule,
    TitleModule,
    ImagenItemModule,
    HttpClientModule
  ],
  exports: [PortfolioComponent]
})
export class PortfolioModule { }
