import { Injectable } from '@angular/core';
import { TableService } from './services/table.service';
import { TableSignalStore } from './table-signal.store';

@Injectable({ providedIn: 'root' })
export class TableFacadeService {

  // should be signal as well
  timeOuts: { [key: number]: any } = {};

  constructor(private signalStore: TableSignalStore, private tableService: TableService) {}

  removeRow(id) {
    this.signalStore.changeUndoState(id);
    this.timeOuts[id] = setTimeout(() => {
      this.signalStore.removeRow(id);
    }, 3000);
  }

  addToStore(row: any) {
    const setUpRow = { ...row, showUndo: false };
    this.signalStore.add(setUpRow);
  }

  undoRemove(id) {
    clearTimeout(this.timeOuts[id]);
    this.signalStore.changeUndoState(id);
    this.timeOuts[id] = null;
  }

  // calculateTotalAccounts() {
  //   return this.signalStore.stateChanged.pipe(
  //     map((data) => {
  //       let finalCalcul = 0;
  //       let accountArray;
  //       if (data.table.length > 0) {
  //         accountArray = data.table.map((item) => item.account);
  //         for (let item in accountArray) {
  //           finalCalcul = this.tableService.precise(
  //             finalCalcul + accountArray[item]
  //           );
  //         }
  //       }
  //       return finalCalcul;
  //     })
  //   );
  // }
}
