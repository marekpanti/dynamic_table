import { HttpClient } from '@angular/common/http';
import { Component, effect } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchingFacadeService } from './fetching-facade.service';
import { ToDoInterface } from './models/todo.interface';


// 1. Create new module to lazy load fetching
// 2. Create icon to route
// 3. Create api service
// 4. Create service facade
// 5. Create behaviourSubject for all subject and remove method in facade
// 6. Call facade method in component
// 7. Layut and (click) event
// 8. Create more components to make it granular

@Component({
  selector: 'app-fetching',
  templateUrl: './fetching.component.html',
  styleUrls: ['./fetching.component.scss']
})
export class FetchingComponent {
  constructor(public facade: FetchingFacadeService) {
    effect(() => {
      console.log(`The list of signals is: ${this.facade.allTodosSignal()}`);
    });
  }

  ngOnInit() {
    this.fetchTodos().subscribe();
  }

  fetchTodos(): Observable<ToDoInterface[]> {
    return this.facade.fetchTodos();
  }

  addTodo(newTodo = 'New Test Todo') {
    // if (!newTodo) {
    //   newTodo = 'nejaky trapny string';
    // }
    this.facade.addTodo(newTodo);
  }
}
