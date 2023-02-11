import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './Components/about/about.module';
import { ContactModule } from './Components/contact/contact.module';
import { CopyrightModule } from './Components/copyright/copyright.module';
import { FooterModule } from './Components/footer/footer.module';
import { HeaderModule } from './Components/header/header.module';
import { LoginModule } from './Components/login/login.module';
import { NavbarModule } from './Components/navbar/navbar.module';
import { PortfolioModule } from './Components/portfolio/portfolio.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './Components/home/home.module';
import { TokenInterceptor } from './Services/token.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    LoginModule,
    HeaderModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutModule,
    ContactModule,
    CopyrightModule,
    FooterModule,
    PortfolioModule,
    AboutModule,
    NgbModule,
    HomeModule
  
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
