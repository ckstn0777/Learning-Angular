import { Component } from '@angular/core';

@Component({
  selector: 'app-ex06',
  template: `
    <h1>예제6. 이벤트 바인딩</h1>
    <input type="text" [value]="name" (input)="setName($event)">
    <button (click)="clearName()">clear</button>
    <p>name: {{name}}</p>
  `
})
export class Ex06Component {
  name = '';

  setName(event) {
    console.log(event);

    this.name = event.target.value;
  }

  clearName() {
    this.name = '';
  }
}
