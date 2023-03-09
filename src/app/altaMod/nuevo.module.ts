import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoExpComponent } from './nuevo.component';
import { FormsModule } from '@angular/forms';
import { NavbarModule } from '../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    NuevoExpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NavbarModule,
    RouterModule
  ],
  exports: [NuevoExpComponent]
})
export class NuevoExpModule { }
