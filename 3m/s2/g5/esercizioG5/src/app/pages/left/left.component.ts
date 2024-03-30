import { Component, OnChanges, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  todos!: Todo[]  //todos si aspetta l'interfaccia Todo


  constructor(private todoSrv: TodoService) { }
  ngOnInit(): void { //void non resituisce nulla

    this.todos = this.todoSrv.notCompleted

  }


}
