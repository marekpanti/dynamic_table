import { Component } from '@angular/core';
import { TodoFacadeService } from '../todo-facade.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  getToDos$ = this.facade.getTodos();

  constructor(private facade: TodoFacadeService) {}

  addTodo(name: string) {
    const date = new Date();
    this.facade.addToDo({
      name: name,
      date: date.toString(),
      id: date.toString() // should be uuid, just an example quick solution
    })
  }

  removeTodo(id: number) {
    this.facade.removeTodo(id);
  }
}
