import { Injectable, signal } from '@angular/core';
import { FetchingApiService } from './fetching-api.service';
import { ToDoInterface } from './models/todo.interface';

@Injectable()
export class FetchingFacadeService {
  public allTodosSignal = signal([]);

  constructor(private fetchService: FetchingApiService) {}

  async fetchTodos() {
    const myTodosResponse: ToDoInterface[] =
      await this.fetchService.fetchTodosClassicApproach();
    this.allTodosSignal.set(myTodosResponse);
  }

  addTodo(todo: string) {
    console.log(todo);
    this.allTodosSignal.mutate((signals: any[]) =>
      signals.push({
        id: new Date().toISOString(),
        title: todo,
        userId: 1,
        completed: false,
      })
    );
    console.log(this.allTodosSignal());
  }

  removeTodo(id: number | string) {
    const filteredSignals = this.allTodosSignal().filter((signal) => {
      return signal.id !== id;
    });
    this.allTodosSignal.set(filteredSignals);
  }
}
