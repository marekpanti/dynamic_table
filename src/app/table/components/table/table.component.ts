import { ChangeDetectorRef, Component, OnInit, effect } from '@angular/core';
import {
  UntypedFormArray,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { TableForm } from '../../models/table.model';
import { TableFacadeService } from '../../table-facade.service';
import { displayedColumns } from './tableColumns';
import { ColumnOrderDialog } from '../change-columns/change-columns.component';
import { ColumnReorderDialog } from '../reorder-columns/reorder-columns.component';
import { MatDialog } from '@angular/material/dialog';
import { TableSignalStore } from '../../table-signal.store';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = displayedColumns;
  dataSource;
  countId = 0;
  public myForm = new FormGroup<TableForm>({
    testField: new FormControl<string>('testValue'),
    rows: new FormArray([this.initRows(0)]),
  });
  constructor(
    public signalStore: TableSignalStore,
    private facade: TableFacadeService,
    private dialog: MatDialog,
    private cd: ChangeDetectorRef
  ) {
    effect(() => {
      console.log(`Table change: ${this.signalStore.tableSignal()}`);
      this.dataSource = [...this.signalStore.tableSignal()];
    });
  }

  ngOnInit() {
    this.saveRow(0);
  }

  initRows(id: number) {
    return new FormGroup({
      firstName: new FormControl<string>('test', Validators.required),
      lastName: new FormControl<string>('', Validators.required),
      account: new FormControl<number | null>(null, Validators.required),
      id: new FormControl(id),
    });
  }

  openChangeOrderColumnsDialog() {
    this.dialog.open(ColumnOrderDialog, {
      width: '400px',
      data: [...this.displayedColumns],
    }).afterClosed().subscribe(data => {
      if (data) {
        this.displayedColumns = [...data];
      }
    });
  }

  openReorderColumnsDialog() {
    this.dialog.open(ColumnReorderDialog, {
      width: '400px',
      data: [...this.displayedColumns],
    }).afterClosed().subscribe(data => {
      if (data) {
        this.displayedColumns = [...data];
      }
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
    // Should be in the facade
    this.countId++;
    const control = <UntypedFormArray>this.myForm.controls['rows'];
    control.push(this.initRows(this.countId));
    this.saveRow(this.countId);
  }

  undoDelete(id: number) {
    this.facade.undoRemove(id);
  }
}
