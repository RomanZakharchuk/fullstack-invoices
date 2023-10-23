import { Component, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mobileQuery: MediaQueryList;
  tabletQuery: MediaQueryList;

  constructor(
    public layout: LayoutService,
    private media: MediaMatcher,
    private cdr: ChangeDetectorRef
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 768px)');
    this.tabletQuery = this.media.matchMedia('(max-width: 960px)');

    this.layout.isMobile = this.mobileQuery.matches;

    this.mobileQuery.addEventListener('change', ({ matches }) => {
      this.layout.isMobile = matches;
      this.cdr.detectChanges();
    });
  }
}
