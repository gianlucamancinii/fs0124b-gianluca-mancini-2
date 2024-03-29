import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { DoneComponent } from './pages/done/done.component';
import { LeftComponent } from './pages/left/left.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title: 'Home'
  },
  {
    path: 'done',
    component: DoneComponent,
    title:'Accomplished'
  },
  {
    path: 'todo',
    component: LeftComponent,
    title:'List'
  },
  {
    path: "users",
    component: UsersComponent,
    title:'user'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
