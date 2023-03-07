import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HeaderModule } from './components/header/header.module';
import { HomeModule } from './components/home/home.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { interceptorProvider } from './interceptor/prod-interceptor.service';
import { RegisterModule } from './auth/register/register.module';
import { LoginModule } from './auth/login/login.module';
import { PortfolioModule } from './components/portfolio/portfolio.module';
import { FooterModule } from './components/footer/footer.module';
import { ContactModule } from './components/contact/contact.module';
import { AboutModule } from './components/about/about.module';
import { CopyrightModule } from './components/copyright/copyright.module';
import { FormacionModule } from './components/formacion/formacion.module';
import { ExperienciaModule } from './components/experiecia/experiencia.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    LoginModule,
    HomeModule,
    HeaderModule,
    NavbarModule,
    RegisterModule,
    PortfolioModule,
    FooterModule,
    ContactModule,
    AboutModule,
    CopyrightModule,
    FormacionModule,
    ExperienciaModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
