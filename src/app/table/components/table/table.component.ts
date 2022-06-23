import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormArray,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { TableForm } from '../../models/table.model';
import { StoreService } from '../../store.service';
import { TableFacadeService } from '../../table-facade.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'account',
    'actions',
  ];
  dataSource;
  undoRow = [{ showUndo: false, timer: 0 }];
  countId = 0;
  public myForm: UntypedFormGroup;
  constructor(
    private store: StoreService,
    private facade: TableFacadeService
  ) {}

  ngOnInit() {
    this.myForm = new FormGroup<TableForm>({
      testField: new FormControl<string>('testValue'),
      rows: new FormArray([this.initRows(0)]),
    });
    this.dataSource = this.myForm.controls['rows'].value;
    // this.store.add(this.myForm.controls['rows'].value[0]);
    this.saveRow(0);
    // this.myForm.valueChanges.subscribe((d) => console.log(d));
    this.store.stateChanged.subscribe(data => {
      console.log(data.table, 'zo storu');
      console.log(this.myForm.controls['rows'].value, 'z formularu')
      this.dataSource = data.table;
    })
  }

  initRows(id: number) {
    return new FormGroup({
      firstName: new FormControl<string>('test', Validators.required),
      lastName: new FormControl<string>('', Validators.required),
      account: new FormControl<number | null>(null, Validators.required),
      id: new FormControl(id),
    });
  }

  saveRow(id) {
    this.facade.addToStore(<UntypedFormArray>this.myForm.controls['rows'].value[id]);
  }

  removeRow(id) {
    this.facade.removeRow(id);
  }

  addRows() {
    this.countId++;
    const control = <UntypedFormArray>this.myForm.controls['rows'];
    control.push(this.initRows(this.countId));
    this.store.add(this.myForm.controls['rows'].value[this.countId]);
    this.undoRow.push({ showUndo: false, timer: 0 });
  }

  undoDelete(id: number) {
    this.facade.undoRemove(id);
  }
}
