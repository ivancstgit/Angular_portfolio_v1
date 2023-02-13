import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { TitleModule } from 'src/app/windgets/title/title.module';
import { SocialModule } from 'src/app/windgets/social/social.module';




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
