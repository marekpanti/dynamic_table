import { Injectable } from "@angular/core";
import { StoreService } from "./store.service";

@Injectable({ providedIn: 'root' })
export class TableFacadeService {
  timeOuts: { [key: number]: any } = {};

  constructor(private store: StoreService) {}

  removeRow(id) {
    console.log(this.timeOuts);
    this.store.changeUndoState(id);
    this.timeOuts[id] = setTimeout(() => {
      this.store.removeRow(id);
    }, 3000);
  }

  addToStore(row: any) {
    const setUpRow = {...row, showUndo: false}
    this.store.add(setUpRow);
  }

  undoRemove(id) {
    clearTimeout(this.timeOuts[id]);
    this.store.changeUndoState(id);
    this.timeOuts[id] = null;
    console.log(this.timeOuts);
  }
}
