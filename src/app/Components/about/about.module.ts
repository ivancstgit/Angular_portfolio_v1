import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { TitleModule } from 'src/app/windgets/title/title.module';
import { SkillsModule } from 'src/app/windgets/skills/skills.module';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    TitleModule,
    SkillsModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
