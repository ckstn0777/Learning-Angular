import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { tap } from 'rxjs/operators';

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
  url = 'http://localhost:3000/todo';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get<Todo[]>(this.url).subscribe(todos => this.todos = todos,
      (error: HttpErrorResponse) => console.log(error));
  }
}
