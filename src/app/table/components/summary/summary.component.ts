import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableFacadeService } from '../../table-facade.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent {
  finalCalcul$ = this.facade.calculateTotalAccounts();

  constructor(private facade: TableFacadeService) {}

  ngDoCheck() {
    console.log('Summary Component')
  }
}
