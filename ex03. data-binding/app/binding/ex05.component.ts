// 스타일 바인딩은 프로퍼티 바인딩이 아닌 어트리뷰트 바인딩의 일종이다
// 주의할 것은 style 어트리뷰트에 의해 이미 스타일이 지정되어 있을 때, 중복되지 않은 스타일은 style 어트리뷰트에 추가되고,
// 중복된 스타일은 스타일 바인딩의 값으로 리셋된다. 다시 말해 스타일 바인딩은 기존 style 어트리뷰트보다 우선한다.
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex05',
  template: `
    <h1>예제5. 스타일 바인딩</h1>
    <button class="btn" [style.background-color]="isActive ? 'red': 'blue'"
      [style.font-size.em]="isActive ? '1.2':'1'"
      (click)="isActive=!isActive">Toggle</button>
  `,
  styles: [`
      .btn {
        background-color: red;
        border: none;
        border-radius: 8px;
        color: white;
        padding: 10px;
        cursor: pointer;
        outline: none;
      }
  `]
})
export class Ex05Component {
  isActive = false;
}
