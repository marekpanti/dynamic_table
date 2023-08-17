import { Component, effect } from '@angular/core';
import { FetchingFacadeService } from './fetching-facade.service';

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
    this.facade.fetchTodos();
  }

  addTodo(newTodo = 'New Test Todo') {
    this.facade.addTodo(newTodo);
  }

  removeTodo(id: number | string) {
    this.facade.removeTodo(id);
  }
}
