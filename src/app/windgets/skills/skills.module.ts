import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SkillsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SkillsComponent]
})
export class SkillsModule { }
