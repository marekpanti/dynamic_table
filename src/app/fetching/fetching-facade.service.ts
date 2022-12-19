import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FetchingApiService } from "./fetching-api.service";
import { ToDoInterface } from "./models/todo.interface";

@Injectable()
export class FetchingFacadeService {
  constructor(private fetchService: FetchingApiService) {}

  fetchTodos(): Observable<ToDoInterface[]> {
    return this.fetchService.fetchTodos();
  }
}
