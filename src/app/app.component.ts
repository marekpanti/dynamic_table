import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  isDarkTheme$: Observable<boolean> = this.themeService.isDarkTheme;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.checkStorageForDarkTheme();
  }

  ngDoCheck() {
    console.log('Main Component')
  }

  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
