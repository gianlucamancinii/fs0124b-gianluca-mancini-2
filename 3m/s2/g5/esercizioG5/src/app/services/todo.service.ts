import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo.interface';
import { todos } from '../../assets/todo';
import { User } from '../interfaces/user.interface';
import { users } from '../../assets/users';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = todos
  users: User []= users
  constructor() {
    this.populate()
  }

  get all(): Todo[] {   //restituisci tutti i Todo
    return this.todos
  }
  get completed(): Todo[] {   // restituisce tutti i Todo completati
    return this.todos.filter(todo => todo.completed)  // di tutti i todo prendimi solo quelli completati
  }
  get notCompleted(): Todo[] {
    return this.todos.filter(todo => !todo.completed)// stessa cosa ma prendimi quelli non completati
  }
  handleQueryFilter(query: string) {     //data una query in forma di stringa, faccio un filtro in base a quella query per nome e cognome

    return this.todos.filter(todo => {

      return todo.user?.firstName.toLowerCase().includes(query) || todo.user?.lastName.toLowerCase().includes(query)
    })
  }
  populate() {
    this.todos.forEach(todo => {
    todo.user =this.users.find(user => user.id === todo.userId)
    })
  }
  handleChangeStatus(id: number) {   // viene chiamato da single todo e cambia lo stato di un todo
    let found = this.todos.find(todo => todo.id === id)
    if (found) {
      //se .find non trova nulla ritornera' undefined, altrimenti un oggetto di tipo Todo
      found.completed = !found.completed
    }
  }
}
