import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';


// 1. Create new module to lazy load fetching
// 2. Create icon to route
// 3. Create api service
// 4. Create service facade
// 5. Create behaviourSubject for all subject and remove method in facade
// 6. Call facade method in component
// 7. Layut and (click) event
// 8. Create more components to make it granular



export interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-fetching',
  templateUrl: './fetching.component.html',
  styleUrls: ['./fetching.component.scss']
})
export class FetchingComponent {
  todos: ToDo[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchTodos().subscribe(todos => this.todos = todos);
  }

  fetchTodos(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/');
  }
}
