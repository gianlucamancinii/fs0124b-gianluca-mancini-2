import { IUsers } from '../interfaces';
import { AuthService } from './../auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor (private AuthSvc:AuthService){}

  user!:IUsers | undefined;

  ngOnInIt(){

    this.AuthSvc.user$.subscribe( user => {

      this.user = user || undefined;

    })
  }

}
