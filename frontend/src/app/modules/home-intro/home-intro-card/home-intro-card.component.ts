import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-intro-card',
  templateUrl: './home-intro-card.component.html',
  styleUrls: ['./home-intro-card.component.scss']
})
export class HomeIntroCardComponent {
  @Input() icon: string;
  @Input() title: string;
  @Input() text: string;
}
