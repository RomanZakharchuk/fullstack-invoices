
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'home-hero',
  templateUrl: './home-hero.component.html',
  styleUrls: ['./home-hero.component.scss']
})
export class HomeHeroComponent {

  constructor(
    private authService: AuthService
  ) { }

  checkBackend() {
    this.authService.login();
  }
}
