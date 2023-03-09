import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarExpComponent } from './altaMod/editar.component';
import { NuevoExpComponent } from './altaMod/nuevo.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProdGuardService } from './guards/prod-guard.service';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  { path: 'nuevo/:type', component: NuevoExpComponent, canActivate: [ProdGuardService], data: {expectedRol: ['admin']}}, 
  { path: 'editar/:id', component:  EditarExpComponent, canActivate: [ProdGuardService], data: {expectedRol: ['admin']}},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
