import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss']
})
export class DoneComponent implements OnInit {
  todos!: Todo[]

  constructor(private todoSrv : TodoService) { }

  ngOnInit(): void { //void non restituisce nulla( non c'è un return)
    this.todos = this.todoSrv.completed
  }

}
