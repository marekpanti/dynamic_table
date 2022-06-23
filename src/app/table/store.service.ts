import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { of } from 'rxjs';
import { StoreState } from './models/table.model';

@Injectable({ providedIn: 'root' })
export class StoreService extends ObservableStore<StoreState> {
  constructor() {
    super({ trackStateHistory: true });
    const initialState: StoreState = {
      table: [],
    };
    this.setState(initialState, 'INIT_STATE');
  }

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
      console.log('existing')

      // copy the object with spread operator to avoid refferences error
      tableState[index] = { ...row };
    } else {
      console.log('new')
      tableState = [...tableState, row];
      console.log(tableState);
    }
    this.setState({ table: tableState }, 'ADD_ROW_TO_TABLE');
  }

  remove() {
    let state = this.getState();
    state.table.splice(state.table.length - 1, 1);
    this.setState({ table: state.table }, 'REMOVE_ROW');
  }
}
