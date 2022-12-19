import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ToDoInterface } from "./models/todo.interface";

@Injectable()
export class FetchingApiService {
  constructor(private http: HttpClient) {}

  fetchTodos(): Observable<ToDoInterface[]> {
    return this.http.get<ToDoInterface[]>('https://jsonplaceholder.typicode.com/todos/');
  }
}
