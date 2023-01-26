import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableComponent } from './components/table/table.component';

import { TableRoutingModule } from './table-routing.module';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './components/summary/summary.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableRoutingModule,
    MaterialModule,
    SummaryComponent,
    TableComponent
  ],
  providers: [],
})
export class TableModule {}
