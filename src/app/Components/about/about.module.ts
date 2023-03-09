import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { TitleModule } from 'src/app/windgets/title/title.module';
import { SkillsModule } from 'src/app/windgets/skills/skills.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    TitleModule,
    SkillsModule,
    FormsModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
