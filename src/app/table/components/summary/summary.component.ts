import { Component, Input } from '@angular/core';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  @Input() accountArray: number[];
  finalCalcul = 0;

  constructor(private tableService: TableService) {}

  ngOnChanges() {
    this.finalCalcul = 0;
    for (let item in this.accountArray) {
        this.finalCalcul = this.tableService.precise(this.finalCalcul + this.accountArray[item]);
    }
  }
}
