import { Component } from '@angular/core';

import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent {

  isOpen: boolean;

  constructor(
    public layout: LayoutService
    ) {}

    toggelBurger() {
      this.isOpen = !this.isOpen;
    }
}
