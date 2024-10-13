import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api/'; 

  constructor(private http: HttpClient) {}

  signUp(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}signup/`, data);
  }

  signIn(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}signin/`, data);
  }

  logout() {
    
    localStorage.removeItem('user');
  }
}
