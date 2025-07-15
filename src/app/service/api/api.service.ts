import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  private apiUrl = 'http://localhost:8080/'; // Replace with your Spring Boot API URL

  get(path: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}`);
  }

  post(path: string, body: any): Observable<any> {
    return this.http.post(`${this.apiUrl}${path}`, body);
  }

  put(path: string, body: any): Observable<any> {
    return this.http.put(`${this.apiUrl}${path}`, body);
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}${path}`);
  }
}
