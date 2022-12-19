import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FetchingApiService } from './fetching-api.service';
import { ToDoInterface } from './models/todo.interface';

@Injectable()
export class FetchingFacadeService {
  public allToDos$ = new BehaviorSubject(null);

  constructor(private fetchService: FetchingApiService) {}

  fetchTodos(): Observable<ToDoInterface[]> {
    return this.fetchService.fetchTodos().pipe(
      tap((todos: ToDoInterface[]) => {
        this.allToDos$.next(todos);
      })
    );
  }

  addTodo() {

  }

  removeTodo() {

  }
}
