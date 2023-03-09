import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditarExpComponent } from './editar.component';
import { NavbarModule } from '../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    EditarExpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NavbarModule,
    RouterModule
  ],
  exports: [EditarExpComponent]
})
export class EditarExpModule { }
