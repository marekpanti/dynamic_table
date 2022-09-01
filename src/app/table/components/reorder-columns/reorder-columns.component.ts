import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'reorder-order',
  templateUrl: 'reorder-columns.component.html',
  styleUrls: ['./reorder-columns.component.scss'],
})
export class ColumnReorderDialog {
  currentColumnIndex = null;
  newPositionColumnIndex = null;

  constructor(
    public dialogRef: MatDialogRef<ColumnReorderDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string[]
  ) {}

  change(index) {
    if (this.currentColumnIndex === null) {
      this.currentColumnIndex = index;
    } else {
      this.newPositionColumnIndex = index;

      this.data = this.immutableReorder(
        this.data,
        this.currentColumnIndex,
        this.newPositionColumnIndex
      );
      this.currentColumnIndex = null;
      this.newPositionColumnIndex = null;
    }
  }

  immutableReorder(array: string[], from: number, to: number) {
    return array.reduce((prev, current, idx, self) => {
      if (from === to) {
        prev.push(current);
      }
      if (idx === from) {
        return prev;
      }
      if (from < to) {
        prev.push(current);
      }
      if (idx === to) {
        prev.push(self[from]);
      }
      if (from > to) {
        prev.push(current);
      }
      return prev;
    }, []);
  }

  close() {
    this.dialogRef.close(null);
  }

  save() {
    this.dialogRef.close([...this.data]);
  }
}
