import { Component, OnInit } from '@angular/core';
import { Todo } from './service/todo.model';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Todo[];
  content: string;

  constructor(private todo: TodoService) {}

  ngOnInit() {
    this.todo.getAll()
      .subscribe(todos => this.todos = todos);
  }

  addTodo() {
    if (!this.content) { return; }

    this.todo.add(this.content)
      .subscribe(
        todo => this.todos = [...this.todos, todo]
      );

    this.content = '';
  }

  clearTodo(todo: Todo) {
    this.todo.clear(todo).subscribe(newTodo => this.todos = this.todos.map(
      todo => todo.id === newTodo.id ? newTodo : todo
    ));
  }

  removeTodo(id: number) {
    this.todo.remove(id)
      .subscribe(
        () => this.todos = this.todos.filter(
          todo => todo.id !== id
        )
      );
  }
}
