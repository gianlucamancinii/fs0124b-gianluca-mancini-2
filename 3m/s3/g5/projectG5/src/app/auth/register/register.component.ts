import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { ILoginData, IUsers } from '../../interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerData:Partial<IUsers>={}
  constructor(private AuthSvc:AuthService,
    private router:Router
    ){}

  signUp(){
this.AuthSvc.register(this.registerData)
.subscribe(data => {

  this.router.navigate (['dashboard'])
})
  }
}



