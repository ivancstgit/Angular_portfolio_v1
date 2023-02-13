import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from '../header/header.module';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';
import { AboutModule } from '../about/about.module';
import { PortfolioModule } from '../portfolio/portfolio.module';
import { CopyrightModule } from '../copyright/copyright.module';
import { ContactModule } from '../contact/contact.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    NavbarModule,
    FooterModule,
    AboutModule,
    PortfolioModule,
    CopyrightModule,
    ContactModule
    
  ]
})
export class HomeModule { }
