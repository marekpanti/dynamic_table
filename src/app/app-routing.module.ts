import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnterComponent } from './enter/enter.component';

const routes: Routes = [
  {
    path: '',
    component: EnterComponent,
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then((m) => m.TableModule),
  },
  {
    path: 'to-do',
    loadChildren: () => import('./todo/todo.module').then((m) => m.TodoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
