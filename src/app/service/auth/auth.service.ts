import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'CognitoIdentityServiceProvider.5ruerc3fsvcck8e1jipodje6r4.e10bb590-5051-7079-f569-96e8246c917c.idToken'; // Change if you know Cognito's storage key

  constructor() {}

  getIdToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getIdToken();
  }

  logout(): void{
    //ToDo Clean This Up
    const clientId = '5ruerc3fsvcck8e1jipodje6r4';
    const domain = 'testerino.auth.us-east-2.amazoncognito.com';
    const redirectUri = 'http://localhost:4200/login'; // or your production URL

    const logoutUrl = `https://${domain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(redirectUri)}`;

    // Clear local/session storage
    localStorage.clear();
    sessionStorage.clear();

    // Redirect to Cognito logout
    console.log('User signed out');
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
