import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import amplifyconfig from '../amplifyconfiguration.json';
import {Amplify} from 'aws-amplify';
import {ProfileComponent} from './profile/profile.component';

Amplify.configure(amplifyconfig);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AmplifyAuthenticatorModule, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'social-UI-v2';




}
