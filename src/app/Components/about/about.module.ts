import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { HttpClientModule } from '@angular/common/http';
import { TitleModule } from 'src/app/Widgets/title/title.module';
import { SkillsModule } from 'src/app/Widgets/skills/skills.module';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    TitleModule,
    HttpClientModule,
    SkillsModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
