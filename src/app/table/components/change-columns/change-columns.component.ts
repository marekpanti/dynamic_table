import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'column-order',
  templateUrl: 'change-columns.component.html',
  styleUrls: ['./change-columns.component.scss'],
})
export class ColumnOrderDialog {
  currentColumnIndex = null;
  newPositionColumnIndex = null;

  constructor(
    public dialogRef: MatDialogRef<ColumnOrderDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string[]
  ) {}

  switchPosition(index) {
    if (this.currentColumnIndex === null) {
      this.currentColumnIndex = index;
    } else {
      this.newPositionColumnIndex = index;
      const temp = this.data[this.newPositionColumnIndex];
      this.data[this.newPositionColumnIndex] = this.data[this.currentColumnIndex];
      this.data[this.currentColumnIndex] = temp;
      this.currentColumnIndex = null;
      this.newPositionColumnIndex = null;
    }
  }

  close() {
    this.dialogRef.close(null)
  }

  save() {
    this.dialogRef.close([...this.data]);
  }
}
