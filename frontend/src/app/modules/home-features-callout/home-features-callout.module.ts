import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeFeaturesCalloutComponent } from './home-features-callout.component';



@NgModule({
  declarations: [
    HomeFeaturesCalloutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeFeaturesCalloutComponent
  ]
})
export class HomeFeaturesCalloutModule { }
