import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeHeaderModule } from 'src/app/modules/home-header/home-header.module';
import { HomeHeroModule } from 'src/app/modules/home-hero/home-hero.module';
import { HomeIntroModule } from 'src/app/modules/home-intro/home-intro.module';
import { HomeFeaturesModule } from 'src/app/modules/home-features/home-features.module';
import { HomeFeaturesCalloutModule } from 'src/app/modules/home-features-callout/home-features-callout.module';
import { HomeFooterModule } from 'src/app/modules/home-footer/home-footer.module';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeHeaderModule,
    HomeHeroModule,
    HomeIntroModule,
    HomeFeaturesModule,
    HomeFeaturesCalloutModule,
    HomeFooterModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
