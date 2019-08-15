import { Component } from '@angular/core';
import { Todo } from './Todo.model';

@Component({
  selector: 'app-ex02',
  template: `
    <h1>인터페이스 사용예제</h1>
    <button (click)="createTodo(1,'ckstn',false)">todo 추가</button>
    <p>todo 리스트</p>
    <ul>
      <li *ngFor="let todo of todos">{{todo.id}} - {{todo.content}} - {{todo.completed}}</li>
    </ul>
  `
})
export class Ex02Component {
  todos: Todo[] = [];
  todo: Todo;

  addTodo(todo: Todo) {
    this.todos = [...this.todos, todo]; // 배열안에 객체 추가
    console.log(this.todos);
  }

  createTodo(id: number, content: string, completed: boolean) {
    this.todo = {
      id: id,
      content: content,
      completed: completed
    }
    this.addTodo(this.todo);
  }
}
