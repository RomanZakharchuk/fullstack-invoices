import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeIntroComponent } from './home-intro.component';
import { HomeIntroCardModule } from './home-intro-card/home-intro-card.module';



@NgModule({
  declarations: [
    HomeIntroComponent
  ],
  imports: [
    CommonModule,
    HomeIntroCardModule
  ],
  exports: [
    HomeIntroComponent
  ]
})
export class HomeIntroModule { }
