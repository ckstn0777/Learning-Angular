import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <h1>{{count}}</h1>
  `
})
export class CounterComponent {
  count: number = 0;

  increaseCount() {
    this.count++;
  }
  decreaseCount() {
    this.count--;
  }
}
