// 여러 개의 CSS 클래스를 추가 또는 제거한다. 한 개의 클래스를 추가 또는 제거할 때는 클래스 바인딩을 사용하는 것이 좋다.
// 문자열, 배열, 객체 다 대입 가능
// 기존의 것을 삭제하지 않고 병합되어 변환된다.
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex01',
  template: `
    <h1>예제2. ngClass 사용</h1>
    <li [ngClass]="stringCssClasses">bold blue</li>
    <li [ngClass]="ArrayCssClasses">italic red</li>
    <li [ngClass]="ObjectCssClasses">bold red</li>
  `,
  styles: [`
    .text-bold   { font-weight: bold; }
    .text-italic { font-style: italic; }
    .color-blue  { color: blue; }
    .color-red   { color: red; }
  `]
})
export class Ex02Compoenent {
  state = true;

  // 문자열 클래스 목록
  stringCssClasses = 'text-bold color-blue';
  // 배열 클래스 목록
  ArrayCssClasses = ['text-italic', 'color-red'];
  // 객체 클래스 목록
  ObjectCssClasses = {
    'text-bold': this.state,
    'text-italic': !this.state,
    'color-blue': !this.state,
    'color-red': this.state
  };
}
