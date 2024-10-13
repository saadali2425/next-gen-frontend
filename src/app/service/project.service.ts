import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:8000/api/projects/'; 

  constructor(private http: HttpClient) {}

  // Method to save a project
  saveProject(project: any): Observable<any> {
    return this.http.post(this.apiUrl, project);
  }

  // Method to load all projects
  loadProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
