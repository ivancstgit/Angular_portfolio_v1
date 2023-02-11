import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { ContactModule } from '../contact/contact.module';
import { CopyrightModule } from '../copyright/copyright.module';
import { AboutModule } from '../about/about.module';
import { PortfolioModule } from '../portfolio/portfolio.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    ContactModule,
    CopyrightModule,
    AboutModule,
    PortfolioModule
  ]
})
export class HomeModule { }
