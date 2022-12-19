import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FetchingComponent } from './fetching.component';

const routes: Routes = [
  {
    path: '',
    component: FetchingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FetchingRoutingModule {}
