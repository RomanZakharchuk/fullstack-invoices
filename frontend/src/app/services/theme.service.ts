import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root',
})
export class ThemeService {
   private readonly themeKey = 'theme';

   getTheme(): string {
      const savedTheme = localStorage.getItem(this.themeKey);
      return savedTheme || 'light';
   }

   setTheme(theme: string): void {
      localStorage.setItem(this.themeKey, theme);
      document.body.setAttribute('data-theme', theme);
   }

   toggleTheme(): void {
      const currentTheme = this.getTheme();
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      this.setTheme(newTheme);
   }
}