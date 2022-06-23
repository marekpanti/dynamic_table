import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormArray,
  FormGroup,
  FormControl,
  FormArray,
  Validators
} from '@angular/forms';
import { TableForm } from '../../models/table.model';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'account', 'actions'];
  dataSource;
  undoRow = [{ showUndo: false, timer: 0 }];
  countId = 0;
  public myForm: UntypedFormGroup;
  constructor(private store: StoreService){}

  ngOnInit() {
    this.myForm = new FormGroup<TableForm>({
      testField: new FormControl<string>('testValue'),
      rows: new FormArray([this.initRows(0)])
    });
    this.dataSource = this.myForm.controls['rows'].value;
    this.myForm.valueChanges.subscribe(d => console.log(d));
  }

  initRows(id: number) {
    return new FormGroup({
      firstName:  new FormControl<string>('test', Validators.required),
      lastName:  new FormControl<string>('', Validators.required),
      account:  new FormControl<number | null>(null, Validators.required),
      id: new FormControl(id)
    });
  }

  saveRow(id) {
    const control = <UntypedFormArray>this.myForm.controls['rows'].value[id];
    this.store.add(control);
  }

 removeRow(i, id) {
    this.undoRow[i].showUndo = true;
    const control = <UntypedFormArray>this.myForm.controls['rows'];
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
    const control = <UntypedFormArray>this.myForm.controls['rows'];
    control.push(this.initRows(this.countId));
    this.dataSource = this.myForm.controls['rows'].value;
    this.undoRow.push({ showUndo: false, timer: 0 });
  }

  undoDelete(i: number) {
    this.undoRow[i].showUndo = false;
    clearTimeout(this.undoRow[i].timer);
  }
}

