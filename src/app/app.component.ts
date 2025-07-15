import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import amplifyconfig from '../amplifyconfiguration.json';
import {Amplify} from 'aws-amplify';
import {ProfileComponent} from './profile/profile.component';
import {ApiService} from './service/api/api.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {Router} from '@angular/router'
import {AuthService} from './service/auth/auth.service';



Amplify.configure(amplifyconfig);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AmplifyAuthenticatorModule, ProfileComponent, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  data = null;
  constructor(private apiService: ApiService, private router: Router, private auth: AuthService) { }
  title = 'social-UI-v2';


  onButtonClick() {
    this.apiService.get('user/getAll').subscribe(response => {
      this.data = response;
    });
  }

  goToUserPage() {
    if(this.auth.isLoggedIn()) {
      this.router.navigate(['myUserPage']);
    }
    else {
      this.router.navigate(['login']);
    }
  }

  signOut() {
    this.auth.logout();
  }

}
