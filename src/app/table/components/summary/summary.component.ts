import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableFacadeService } from '../../table-facade.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SummaryComponent {
  finalCalcul$ = this.facade.calculateTotalAccounts();

  constructor(private facade: TableFacadeService) {}
}
