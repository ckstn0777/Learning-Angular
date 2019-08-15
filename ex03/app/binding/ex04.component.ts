// 클래스 바인딩은 프로퍼티 바인딩이 아닌 어트리뷰트 바인딩의 일종이다
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex04',
  template: `
    <h1>예제4. 클래스 바인딩</h1>
    <!-- 조건의 의한 클리래스 바인딩 우변의 표현식이 true이면 클래스를 추가한다 -->
    <div [class.text-large]="isLarge">text-large</div>
    <!-- 조건의 의한 클래스 바인딩 우변의 표현식이 false이면 클래스를 삭제한다 -->
    <div class="text-small color-red" [class.color-red]="isRed">text-small</div>

    <!-- 여러 개의 클래스를 한번에 지정할 수 있다 -->
    <div [class]="myClasses">text-large color-red</div>
    <!-- 클래스 바인딩은 기존 클래스 어트뷰트보다 우선한다.
         따라서 기존 클래스 어트리뷰트는 클래스 바인딩에 의해 reset된다.
         클래스 바인딩의 위치는 관계없다. -->
    <div class="text-small color-blue" [class]="myClasses">text-large color-red</div>
  `,
  styles: [`
    .text-small {
      font-size: 18px;
    }
    .text-large {
      font-size: 36px;
    }
    .color-blue {
      color: blue;
    }
    .color-red {
      color: red;
    }
  `]
})
export class Ex04Component {
  isLarge = true;
  isRed = false;
  myClasses = 'text-large color-red';
}
