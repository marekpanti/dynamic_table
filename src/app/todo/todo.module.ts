import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoRoutingModule } from './todo-routing.module';
import { AddTodoComponent } from './add-todo/add-todo.component';

@NgModule({
  declarations: [TodoListComponent, AddTodoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TodoRoutingModule
  ],
  providers: [],
})
export class TodoModule {}
