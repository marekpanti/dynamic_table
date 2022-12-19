import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FetchingComponent } from './fetching.component';
import { FetchingRoutingModule } from './fetching-routing.module';

@NgModule({
  declarations: [FetchingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FetchingRoutingModule
  ],
  providers: [],
})
export class FetchingModule {}
