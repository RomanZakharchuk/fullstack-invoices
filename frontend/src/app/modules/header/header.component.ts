import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isLightTheme = true;

  constructor(
    private themeService: ThemeService
    ) {}

  ngOnInit() {
    this.isLightTheme = this.themeService.getTheme() === 'light';
    this.setTheme(this.isLightTheme);
  }

  onThemeSwitchChange() {
    this.isLightTheme = !this.isLightTheme;
    this.setTheme(this.isLightTheme);
  }

  setTheme(isLightTheme: boolean) {
    const theme = isLightTheme ? 'light' : 'dark';
    this.themeService.setTheme(theme);
  }
}
