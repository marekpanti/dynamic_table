import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  public isDarkTheme = new BehaviorSubject<boolean>(false);

  checkStorageForDarkTheme() {
    if (localStorage.getItem('isDarkMode') === 'true') {
      this.isDarkTheme.next(true);
    } else {
      this.isDarkTheme.next(false);
    }
  }

  setDarkTheme(isDarkTheme: boolean): void {
    localStorage.setItem('isDarkMode', isDarkTheme.toString());
    this.isDarkTheme.next(isDarkTheme);
  }
}
