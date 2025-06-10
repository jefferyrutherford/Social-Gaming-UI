import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import amplifyconfig from '../amplifyconfiguration.json';
import {Amplify} from 'aws-amplify';
import {ProfileComponent} from './profile/profile.component';
import {ApiService} from './service/api.service';

Amplify.configure(amplifyconfig);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AmplifyAuthenticatorModule, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  data = null;
  constructor(private apiService: ApiService) { }
  title = 'social-UI-v2';


  onButtonClick() {
    this.apiService.get('user/getAll').subscribe(response => {
      this.data = response;
    });
  }

}
