import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'https://localhost/task-manager-backend/api';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/getTasks.php`);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/getById.php?id=${id}`);
  }

  createTask(task: Task): Observable<Task> {
    console.log(`${this.apiUrl}/create.php`, task);
    return this.http.post<Task>(`${this.apiUrl}/create.php`, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/update.php`, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/delete.php?id=${id}`);
  }
}
