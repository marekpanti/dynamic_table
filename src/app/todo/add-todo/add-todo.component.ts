import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  @Output() addTodoEvent = new EventEmitter<string>();
  name = new FormControl('');

  addTodo() {
    this.addTodoEvent.emit(this.name.value);
  }
}
