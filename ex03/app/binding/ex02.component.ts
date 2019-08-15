import { Component } from '@angular/core';

@Component({
  selector: 'app-ex02',
  template: `
    <h1>프로퍼티 바인딩</h1>
    <input type="text" [value]="name">
    <p [innerHTML]="contents"></p>
    <img [src]="imageUrl">
    <button [disabled]="isDisabled">disabled button</button>
  `
})
export class Ex02Component {
  name = 'ckstn';
  contents = 'Lorem ipsum dolor sit amet.';
  imageUrl = 'https://taegon.kim/wp-content/uploads/2018/05/image-5.png';
  isDisabled = true;
}
