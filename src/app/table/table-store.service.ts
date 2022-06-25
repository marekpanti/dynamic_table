import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { of } from 'rxjs';
import { StoreState } from './models/table.model';

@Injectable({ providedIn: 'root' })
export class TableStoreService extends ObservableStore<StoreState> {
  constructor() {
    super({ trackStateHistory: true });
    const initialState: StoreState = {
      table: [],
      timeOuts: {},
    };
    this.setState(initialState, 'INIT_STATE');
  }


  // One time action, no need to subscribe
  get() {
    const { table } = this.getState();
    if (table) {
      return of(table);
    }
    return of(null);
  }

  add(row: any) {
    let tableState = this.getState().table;
    let index = null;
    let changeExistingRow = tableState.find((item, i) => {
      index = i;
      return item.id === row.id;
    });
    if (changeExistingRow) {
      // copy the object with spread operator to avoid refferences error
      tableState[index] = { ...row };
    } else {
      tableState = [...tableState, row];
    }
    this.setState({ table: tableState }, 'ADD_ROW_TO_TABLE');
  }

  changeUndoState(id) {
    let state = this.getState().table;
    const rowIndex = state.findIndex(row => row.id === id);
    state[rowIndex].showUndo = !state[rowIndex].showUndo;
    this.setState({ table: state }, 'CHANGE_UNDO_STATE');
  }

  removeRow(id) {
    let state = this.getState().table;
    const rowIndex = state.findIndex(row => row.id === id);
    state.splice(rowIndex, 1);
    this.setState({ table: state }, 'REMOVE_ROW_ID');
  }
}
