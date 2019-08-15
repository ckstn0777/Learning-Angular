// 한 개의 인라인 스타일을 추가 또는 제거할 때는 스타일 바인딩을 사용하는 것이 좋다.
// ngStyle 디렉티브는 바인딩된 객체를 HTML 요소의 style 어트리뷰트에 반영한다.
// ngStyle 디렉티브에 바인딩된 객체는 CSS 프로퍼티를 프로퍼티 이름으로, CSS 프로퍼티 값을 프로퍼티 값으로 갖는다.
// style 어트리뷰트에 선언된 스타일과 ngStyle 디렉티브에 바인딩된 스타일이 병합된다.
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex03',
  template: `
    <h1>예제3. ngStyle</h1>
    <div>
      Width: <input type="text" [(ngModel)]="width">
      <button (click)="increaseWidth()">+</button>
      <button (click)="decreaseWidth()">-</button>
    </div>
    <div>
      Height: <input type="text" [(ngModel)]="height">
      <button (click)="increaseHeight()">+</button>
      <button (click)="decreaseHeight()">-</button>
    </div>
    <div [ngStyle]="{
      'width.px':width,
      'height.px':height,
      'background-color':'red'
    }"></div>
  `
})
export class Ex03Compoenent {
  width = 200;
  height = 200;

  increaseWidth() { this.width += 10; }
  decreaseWidth() { this.width -= 10; }
  increaseHeight() { this.height += 10; }
  decreaseHeight() { this.height -= 10; }
}
