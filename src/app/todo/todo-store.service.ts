import { Injectable } from '@angular/core';
import { ObservableStore } from '@codewithdan/observable-store';
import { of } from 'rxjs';
import { TodoItem, ToDoStoreState } from './models/todo.model';

@Injectable({ providedIn: 'root' })
export class TodoStoreService extends ObservableStore<ToDoStoreState> {
  constructor() {
    super({ trackStateHistory: true });
    const initialState: ToDoStoreState = {
      todos: [],
      length: 0,
    };
    this.setState(initialState, 'INIT_STATE');
  }


  // One time action, no need to subscribe
  get() {
    const { todos } = this.getState();
    if (todos) {
      return of(todos);
    }
    // Here could be potentially API call
    return of(null);
  }

  add(todo: TodoItem) {
    let todoState = this.getState().todos;
      console.log('new')
      todoState = [...todoState, todo];
    this.setState({ todos: todoState }, 'ADD_TODO');
  }

  removeRow(id) {
    console.log('remove', id);
    let state = this.getState().todos;
    state.splice(id, 1);
    this.setState({ todos: state }, 'REMOVE_TODO_ID');
  }
}
