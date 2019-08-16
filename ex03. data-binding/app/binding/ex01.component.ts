import { Component } from '@angular/core';

@Component({
  selector: 'app-ex01',
  template: `
    <h1>예제1. 인터폴레이션</h1>
    <p>name: {{ name }}</p>
    <p>age: {{ age }}</p>
    <p>admin: {{ admin }}</p>
    <p>address: {{ address.city }} {{ address.country }}</p>
    <p>sayHi(): {{ sayHi() }}</p>
    <p>age * 10: {{ age * 10 }}</p>
    <p>age > 10: {{ age > 10}}</p>
  `
})
export class Ex01Component {
  name = 'Angular';
  age = 20;
  admin = true;
  address = {
    city: 'Seoul',
    country: 'Korea'
  };

  sayHi() {
    return `Hi. my name is ${this.name}.`;
  }
}
