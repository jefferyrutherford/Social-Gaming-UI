import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private clientId = environment.cognito.clientId;
  private domain = environment.cognito.domain;
  private redirectUri = environment.cognito.redirectUri;

  constructor() {}

  getIdToken(): string | undefined {

    const keys = Object.keys(localStorage);

    console.log(JSON.stringify(keys));
    return keys.find(k=>{
      //The idToken is built with the clientID.userID.*.idToken, no need to overthink it and it can change.
      // Just grab the id token.
        return k.startsWith("CognitoIdentityServiceProvider") && k.endsWith("idToken")
    }) || undefined
    ;
  }

  isLoggedIn(): boolean {
    return !!this.getIdToken();
  }

  logout(): void{


    const logoutUrl = `https://${this.domain}/logout?client_id=${this.clientId}&logout_uri=${encodeURIComponent(this.redirectUri)}`;

    // Clear local/session storage
    localStorage.clear();
    sessionStorage.clear();

    // Redirect to Cognito logout

    //ToDo, make a sign out call to our backend to update last logged in time.
    console.log('User signed out');
    //window.location.href = "http://localhost:4200/login";
    window.location.href = logoutUrl;


  }

}
