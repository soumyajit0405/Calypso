import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhoneinputPage } from './phoneinput';

@NgModule({
  declarations: [
    PhoneinputPage,
  ],
  imports: [
    IonicPageModule.forChild(PhoneinputPage),
  ],
})
export class PhoneinputPageModule {}
