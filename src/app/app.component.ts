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
  firstName = 'Lolek';
  lastName = 'Bolekov';

  today: Date = new Date();

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.checkStorageForDarkTheme();
  }

  fullName(firstName, lastName) {
    console.log('runs x times in component');
    return firstName + ' ' + lastName;
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
