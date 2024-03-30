import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss']
})
export class SingleTodoComponent {
  @Input() todo!: Todo
  constructor(private todoSrv: TodoService) {}
  toggleTask(id: number) {
    this.todoSrv.handleChangeStatus(id)
  }
}
