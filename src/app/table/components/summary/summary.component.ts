import { Component, Input, OnInit } from '@angular/core';
import { TableService } from '../../services/table.service';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  accountArray: number[];
  finalCalcul = 0;

  constructor(private tableService: TableService, private store: StoreService) {}

  ngOnInit() {
    console.log('v on init')
    this.store.stateChanged.subscribe((data) => {
      console.log(data, 'data');
      if (data.table.length > 0) {
        this.accountArray = data.table.map(item => item.account);
        this.finalCalcul = 0;
        for (let item in this.accountArray) {
            this.finalCalcul = this.tableService.precise(this.finalCalcul + this.accountArray[item]);
        }
      }
    });
  }
}
