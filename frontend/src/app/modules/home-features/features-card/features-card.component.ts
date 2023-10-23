import { Component, Input } from '@angular/core';

@Component({
  selector: 'features-card',
  templateUrl: './features-card.component.html',
  styleUrls: ['./features-card.component.scss']
})
export class FeaturesCardComponent {
  @Input() side: string;
  @Input() image: string;
  @Input() title: string;
  @Input() text: string;
}
