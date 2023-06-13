import { Component, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

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

  immutableReorder(array: string[], fromIndex: number, toIndex: number) {
    return array.reduce((prev, current, index, wholeArray) => {
      // if index of starting is the same as end, we want just to add current index of iteration to new array
      if (fromIndex === toIndex) {
        prev = [...prev, current];
      }
      // in case that index of iteration is equal to our starting point we want to skip
      if (index === fromIndex) {
        return prev;
      }
      if (fromIndex < toIndex) {
        prev = [...prev, current];
      }
      // if index of iteration is equal to toIndex, we add to our new array item[fromIndex] because this creates the new position
      if (index === toIndex) {
        prev = [...prev, wholeArray[fromIndex]];
      }
      if (fromIndex > toIndex) {
        prev = [...prev, current];
      }
      return prev;
    }, []);
    // initial value empty array
  }

  close() {
    this.dialogRef.close(null);
  }

  save() {
    this.dialogRef.close([...this.data]);
  }
}
