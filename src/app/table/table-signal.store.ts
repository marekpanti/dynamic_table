import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TableSignalStore {
  public tableSignal = signal([]);
  public timeOuts = signal({});

  add(row: any) {
    this.tableSignal.mutate(state => state.push(row));
  }

  changeUndoState(id) {
    this.tableSignal.mutate(state => {
      const rowIndex = state.findIndex(row => row.id ===id);
      state[rowIndex].showUndo = !state[rowIndex].showUndo;
    })
  }

  removeRow(id) {
    this.tableSignal.mutate(state => {
      const rowIndex = state.findIndex(row => row.id === id);
      state.splice(rowIndex, 1);
    })
  }
}
