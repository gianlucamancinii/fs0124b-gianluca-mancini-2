import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  isUserLoggedIn:boolean = false;
constructor(private AuthSvc:AuthService){}

ngOnInIt(){

  this.AuthSvc.isLoggedIn$.subscribe(data => {

    this.isUserLoggedIn = data;
  })
}

logout(){
  this.AuthSvc.logout()
}
}
