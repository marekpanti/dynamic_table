import { Component, OnInit } from '@angular/core';
import {
  UntypedFormArray,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { TableForm } from '../../models/table.model';
import { TableStoreService } from '../../table-store.service';
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
  countId = 0;
  public myForm = new FormGroup<TableForm>({
    testField: new FormControl<string>('testValue'),
    rows: new FormArray([this.initRows(0)]),
  });
  constructor(
    private store: TableStoreService,
    private facade: TableFacadeService
  ) {}

  ngOnInit() {
    this.saveRow(0);
    this.store.stateChanged.subscribe((data) => {
      this.dataSource = data.table;
    });
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
    this.facade.addToStore(
      <UntypedFormArray>this.myForm.controls['rows'].value[id]
    );
  }

  removeRow(id) {
    this.facade.removeRow(id);
  }

  addRows() {
    this.countId++;
    const control = <UntypedFormArray>this.myForm.controls['rows'];
    control.push(this.initRows(this.countId));
    this.store.add(this.myForm.controls['rows'].value[this.countId]);
  }

  undoDelete(id: number) {
    this.facade.undoRemove(id);
  }
}
