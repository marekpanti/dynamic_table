import { Injectable } from '@angular/core';
import { ToDoInterface } from './models/todo.interface';

@Injectable()
export class FetchingApiService {
  async fetchTodosClassicApproach(): Promise<ToDoInterface[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const todos = await response.json();
    return todos;
  }
}
