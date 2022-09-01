import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableComponent } from './components/table/table.component';

import { TableRoutingModule } from './table-routing.module';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './components/summary/summary.component';
import { MaterialModule } from '../material.module';
import { ColumnOrderDialog } from './components/change-columns/change-columns.component';
import { ColumnReorderDialog } from './components/reorder-columns/reorder-columns.component';

@NgModule({
  declarations: [TableComponent, SummaryComponent, ColumnOrderDialog, ColumnReorderDialog],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableRoutingModule,
    MaterialModule
  ],
  providers: [],
})
export class TableModule {}
