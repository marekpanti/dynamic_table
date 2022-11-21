import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnterComponent {
  ngDoCheck() {
    console.log('Enter Component')
  }
}

