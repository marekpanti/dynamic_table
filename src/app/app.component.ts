import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkTheme$: Observable<boolean> = this.themeService.isDarkTheme;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.checkStorageForDarkTheme();
  }
  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
