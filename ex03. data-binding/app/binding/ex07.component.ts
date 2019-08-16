// 양방향 데이터 바인딩은 뷰와 컴포넌트 클래스의 상태 변화를 상호 반영하는 것을 말한다.
// 즉, 뷰의 상태가 변화하면 컴포넌트 클래스의 상태도 변화하고 그 반대로 컴포넌트 클래스의 상태가 변화하면 뷰의 상태도 변화하는 것이다.
// ngModel 디렉티브를 사용하기 위해서는 FormsModule을 모듈에 등록해야합니다.
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex07',
  template: `
    <h1>예제7. 양방향 바인딩</h1>
    <input type="text" [(ngModel)]="name1">
    <p>name1: {{ name1 }}</p>

    <input [ngModel]="name2" (ngModelChange)="name2=$event">
    <p>name2: {{name2}}</p>
  `
})
export class Ex07Component {
  name1 = '';
  name2 = '';
}
