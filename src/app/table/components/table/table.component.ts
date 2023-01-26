import { Component, OnInit } from '@angular/core';
import {
  UntypedFormArray,
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TableForm } from '../../models/table.model';
import { TableStoreService } from '../../table-store.service';
import { TableFacadeService } from '../../table-facade.service';
import { displayedColumns } from './tableColumns';
import { MatDialog } from '@angular/material/dialog';
import { ColumnOrderDialog } from '../change-columns/change-columns.component';
import { ColumnReorderDialog } from '../reorder-columns/reorder-columns.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { SummaryComponent } from '../summary/summary.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    SummaryComponent,
    MatFormFieldModule,
    MatInputModule
  ],
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
    private store: TableStoreService,
    private facade: TableFacadeService,
    private dialog: MatDialog
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

  openChangeOrderColumnsDialog() {
    this.dialog
      .open(ColumnOrderDialog, { // not needed to be imported elsewhere
        width: '400px',
        data: [...this.displayedColumns],
      })
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this.displayedColumns = [...data];
        }
      });
  }

  openReorderColumnsDialog() {
    this.dialog
      .open(ColumnReorderDialog, {
        width: '400px',
        data: [...this.displayedColumns],
      })
      .afterClosed()
      .subscribe((data) => {
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
    this.countId++;
    const control = <UntypedFormArray>this.myForm.controls['rows'];
    control.push(this.initRows(this.countId));
    this.store.add(this.myForm.controls['rows'].value[this.countId]);
  }

  undoDelete(id: number) {
    this.facade.undoRemove(id);
  }
}
