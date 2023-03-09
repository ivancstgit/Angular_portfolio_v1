import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { TitleModule } from 'src/app/windgets/title/title.module';
import { SocialModule } from 'src/app/windgets/social/social.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    TitleModule,
    SocialModule,
    FormsModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
