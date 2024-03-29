import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { TodosComponent } from './pages/todos/todos.component';
import { IdPipe } from './pipes/idfy.pipe';
import { FullNamePipe } from './pipes/full-name.pipe';
import { FormsModule } from '@angular/forms';
import { DoneComponent } from './pages/done/done.component';
import { SingleTodoComponent } from './components/single-todo/single-todo.component';
import { LeftComponent } from './pages/left/left.component';
import { UsersComponent } from './pages/users/users.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TodosComponent,
    IdPipe,
    FullNamePipe,
    DoneComponent,
    SingleTodoComponent,
    LeftComponent,
    UsersComponent,
    SingleUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
