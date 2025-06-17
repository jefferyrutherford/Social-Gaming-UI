import { Component } from '@angular/core';
import {AmplifyAuthenticatorModule} from '@aws-amplify/ui-angular';
import {AuthService} from '../../service/auth/auth.service';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [
    AmplifyAuthenticatorModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(public auth: AuthService) {
  }

}
