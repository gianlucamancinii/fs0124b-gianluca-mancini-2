import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ILoginData } from '../../interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginData!:ILoginData

  constructor(private AuthSvc:AuthService,
    private router:Router
    ){}

    signIn(){

      this.AuthSvc.login(this.loginData)
      .subscribe(data => {
        this.router.navigate(['dashboard'])
      })
    }
}
