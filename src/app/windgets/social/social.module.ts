import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialComponent } from './social.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SocialComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[SocialComponent]
})
export class SocialModule { }
