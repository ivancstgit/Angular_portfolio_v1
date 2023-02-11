import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { TitleModule } from 'src/app/Widgets/title/title.module';
import { SocialModule } from 'src/app/Widgets/social/social.module';




@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    TitleModule,
    SocialModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
