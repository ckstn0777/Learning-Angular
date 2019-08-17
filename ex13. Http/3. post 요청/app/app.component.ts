import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  todos: Todo[];
  content: string;
  url = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTodos().subscribe(todos => this.todos = todos);
  }

  add() {
    if (!this.content) { return; }

    this.addTodo()
      .subscribe(todo => this.todos = [...this.todos, todo]);

    this.content = '';
  }

  private getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

   // 서버에 새로운 todo의 추가를 요청한다.
  private addTodo(): Observable<Todo> {
    /* 서버로 전송할 요청 페이로드
       id는 json-server에 의해 자동 생성된다 */
    const payload = { content: this.content, completed: false};

    return this.http.post<Todo>(this.url, payload);
  }
}
