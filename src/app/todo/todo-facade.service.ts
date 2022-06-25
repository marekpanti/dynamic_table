import { Injectable } from "@angular/core";
import { TodoItem } from "./models/todo.model";
import { TodoStoreService } from "./todo-store.service";

@Injectable({ providedIn: 'root' })
export class TodoFacadeService {
  // could be move to store as well, because
  // if you leave the component
  // the action stops and the item won't get removed
  timeOuts: { [key: number]: any } = {};

  constructor(private store: TodoStoreService) {}

  addToDo(todo: TodoItem) {
    this.store.add(todo);
  }

  getTodos() {
    return this.store.stateChanged;
  }

  removeTodo(id: number) {
    this.store.removeRow(id);
  }
}
