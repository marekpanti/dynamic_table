import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FetchingComponent } from './fetching.component';
import { FetchingRoutingModule } from './fetching-routing.module';
import { FetchingApiService } from './fetching-api.service';
import { FetchingFacadeService } from './fetching-facade.service';

@NgModule({
  declarations: [FetchingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FetchingRoutingModule
  ],
  providers: [FetchingApiService, FetchingFacadeService],
})
export class FetchingModule {}
