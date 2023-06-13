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
  {
    path: 'fetching',
    loadChildren: () => import('./fetching/fetching.module').then((m) => m.FetchingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
