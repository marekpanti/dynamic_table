import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray
} from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  accountArray: number[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'account', 'delete'];
  dataSource;
  undoRow = [{ showUndo: false, timer: 0 }];
  countId = 0;
  public myForm: FormGroup;
  constructor(private _fb: FormBuilder){}

  ngOnInit() {
    this.myForm = this._fb.group({
      testField: ['testValue'],
      rows: this._fb.array([this.initRows(0)])
    });
    this.dataSource = this.myForm.controls['rows'].value;
  }

  initRows(id: number) {
    return this._fb.group({
      firstName: ['test'],
      lastName: [''],
      account: [],
      id: [id]
    });
  }

 removeRow(i, id) {
    this.undoRow[i].showUndo = true;
    const control = <FormArray>this.myForm.controls['rows'];
    this.undoRow[i].timer = setTimeout(() => {
      const index = control.value
        .map(d => {
          return d['id'];
        })
        .indexOf(id);
      control.removeAt(index);
      this.undoRow.splice(index, 1);
      this.dataSource = this.myForm.controls['rows'].value;
    }, 3000);
  }

  addRows() {
    this.countId++;
    const control = <FormArray>this.myForm.controls['rows'];
    control.push(this.initRows(this.countId));
    this.dataSource = this.myForm.controls['rows'].value;
    this.undoRow.push({ showUndo: false, timer: 0 });
  }

  undoDelete(i: number) {
    this.undoRow[i].showUndo = false;
    clearTimeout(this.undoRow[i].timer);
  }

  getAccounts() {
    this.accountArray = this.myForm.controls['rows'].value.map(item => item.account);
  }
}

