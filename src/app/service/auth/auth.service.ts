import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'CognitoIdentityServiceProvider.7nb439s4gah8m4j7frd0diqk0i.216bd550-9031-701b-230a-a52296e18fa8.idToken'; // Change if you know Cognito's storage key

  constructor() {}

  getIdToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getIdToken();
  }

  logout(): void{
    const clientId = environment.cognito.clientId;
    const domain = environment.cognito.domain;
    const redirectUri = environment.cognito.redirectUri; // or your production URL

    const logoutUrl = `https://${domain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(redirectUri)}`;

    // Clear local/session storage
    localStorage.clear();
    sessionStorage.clear();

    // Redirect to Cognito logout

    //ToDo, make a sign out call to our backend to update last logged in time.
    console.log('User signed out');
    //window.location.href = "http://localhost:4200/login";
    window.location.href = logoutUrl;


  }

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  decodeToken(): any {
    const token = this.getIdToken();
    if (!token) return null;
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }
}
