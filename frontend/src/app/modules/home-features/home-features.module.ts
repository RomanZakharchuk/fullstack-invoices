import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeFeaturesComponent } from './home-features.component';
import { FeaturesCardModule } from './features-card/features-card.module';



@NgModule({
  declarations: [
    HomeFeaturesComponent
  ],
  imports: [
    CommonModule,
    FeaturesCardModule,
  ],
  exports: [
    HomeFeaturesComponent
  ]
})
export class HomeFeaturesModule { }
