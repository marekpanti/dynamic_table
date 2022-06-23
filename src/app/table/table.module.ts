import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TableComponent } from './components/table/table.component';

import { TableRoutingModule } from './table-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SummaryComponent } from './components/summary/summary.component';
import { EnterComponent } from '../enter/enter.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [TableComponent, SummaryComponent, EnterComponent],
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
