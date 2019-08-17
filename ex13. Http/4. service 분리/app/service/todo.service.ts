import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  // 서버에 모든 todo를 요청한다.
  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  // 서버에 새로운 todo를 추가 요청한다.
  add(content: string): Observable<Todo> {
    const payload = { content, completed: false };

    return this.http.post<Todo>(this.url, payload);
  }

}
