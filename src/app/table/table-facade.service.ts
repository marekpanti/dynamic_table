import { Injectable } from '@angular/core';
import { TableStoreService } from './table-store.service';
import { map } from 'rxjs/operators';
import { TableService } from './services/table.service';

@Injectable({ providedIn: 'root' })
export class TableFacadeService {
  // could be move to store as well, because
  // if you leave the component
  // the action stops and the item won't get removed
  timeOuts: { [key: number]: any } = {};

  constructor(private store: TableStoreService, private tableService: TableService) {}

  removeRow(id) {
    this.store.changeUndoState(id);
    this.timeOuts[id] = setTimeout(() => {
      this.store.removeRow(id);
    }, 3000);
  }

  addToStore(row: any) {
    const setUpRow = { ...row, showUndo: false };
    this.store.add(setUpRow);
  }

  undoRemove(id) {
    clearTimeout(this.timeOuts[id]);
    this.store.changeUndoState(id);
    this.timeOuts[id] = null;
  }

  calculateTotalAccounts() {
    return this.store.stateChanged.pipe(
      map((data) => {
        let finalCalcul = 0;
        let accountArray;
        if (data.table.length > 0) {
          accountArray = data.table.map((item) => item.account);
          for (let item in accountArray) {
            finalCalcul = this.tableService.precise(
              finalCalcul + accountArray[item]
            );
          }
        }
        return finalCalcul;
      })
    );
  }
}
