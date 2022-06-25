export interface TodoItem {
  name: string;
  date: string;
  id: string; // uuid or timestamp
}

export interface ToDoStoreState {
  todos: TodoItem[];
  length: number;
}
