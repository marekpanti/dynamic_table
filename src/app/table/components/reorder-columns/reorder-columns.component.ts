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

  immutableReorder(array: string[], fromIndex: number, toIndex: number) {
    return array.reduce((prev, current, index, wholeArray) => {
      // if index of starting is the same as end, we want just to add current index of iteration to new array
      if (fromIndex === toIndex) {
        prev = [...prev, current];
        console.log('prva');
      }
      // in case that index of iteration is equal to our starting point we want to skip
      if (index === fromIndex) {
        console.log('index of iteration == fromIndex');
        return prev;
      }
      if (fromIndex < toIndex) {
        console.log('from index, je mensi ako to index');
        prev = [...prev, current];
      }
      // if index of iteration is equal to toIndex, we add to our new array item[fromIndex] because this creates the new position
      if (index === toIndex) {
        console.log('index of iteration je rovnaky ako toIndex');
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
