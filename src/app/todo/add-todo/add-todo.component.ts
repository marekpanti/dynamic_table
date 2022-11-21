import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoComponent {
  @Output() addTodoEvent = new EventEmitter<string>();
  name = new FormControl('');

  ngDoCheck() {
    console.log('AddTodo Component')
  }

  addTodo() {
    this.addTodoEvent.emit(this.name.value);
  }
}
