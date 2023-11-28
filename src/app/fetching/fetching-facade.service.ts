import { Injectable, computed, signal, untracked } from '@angular/core';
import { FetchingApiService } from './fetching-api.service';
import { ToDoInterface } from './models/todo.interface';


// Change the untrack and see what it does
// Use .mutate() instead of update
// Think about the fetch and try to use httpClient and see the difference

@Injectable()
export class FetchingFacadeService {
  public allTodosSignal = signal([]);
  private users = signal([
    {
      userId: 1,
      userName: 'Jozko Mrkvicka',
    },
    {
      userId: 2,
      userName: 'Peter Nad',
    },
  ]);
  private selectedUser = signal(2);
  // Simulate our selector
  public currentUser = computed(() => {
    console.log('kolko krat sa udeje ?')
    const users = untracked(() => this.users());
    const selectedUser = users.filter(
      (user) => user.userId === this.selectedUser()
    );
    return selectedUser[0];
  });

  constructor(private fetchService: FetchingApiService) {}

  async fetchTodos() {
    const myTodosResponse: ToDoInterface[] =
      await this.fetchService.fetchTodosClassicApproach();
    this.allTodosSignal.set(myTodosResponse);
  }

  changeUserId() {
    // set would be better, but for the sake of the example
    this.selectedUser.update(() => 1);
  }

  changeUserName() {
    this.users.update((users) => [...users, {userId: 1, userName: 'Jozkovia'}]);
  }

  addTodo(todo: string) {
    console.log(todo);
    // or we could be using .mutate()
    this.allTodosSignal.update((signals: any[]) => [
      ...signals,
      {
        id: new Date().toISOString(),
        title: todo,
        userId: 1,
        completed: false,
      },
    ]);
    console.log(this.allTodosSignal());
  }

  removeTodo(id: number | string) {
    this.allTodosSignal.update((signals) =>
      signals.filter((signal) => signal.id !== id)
    );
  }
}
