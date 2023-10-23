import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeroComponent } from './home-hero.component';



@NgModule({
  declarations: [
    HomeHeroComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeHeroComponent
  ]
})
export class HomeHeroModule { }
