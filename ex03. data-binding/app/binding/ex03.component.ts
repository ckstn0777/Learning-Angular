import { Component } from '@angular/core';

@Component({
  selector: 'app-ex02',
  template: `
    <h1>어트리뷰트 바인딩</h1>
    <!-- 프로퍼티 바인딩 -->
    <input id="user" type="text" [value]="name">

    <!-- 어트리뷰트 바인딩 -->
    <input id="user" type="text" [attr.value]="name">

    <!--
      이 둘의 차이를 html 코드를 보면서 분석해보자.
      어트리뷰트 바인딩은 html 코드에 value가 생겼다.
      하지만, 프로퍼티 바인딩은 생기지 않았다. 프로퍼티 바인딩은 DOM 객체안의
      value에 값이 들어가 있다.

      어트리뷰트 바인딩을 쓰는 이유는 매핑하는 프로퍼티가 존재하지 않는경우가 있기 때문
    -->
  `
})
export class Ex03Component {
  name = 'ckstn';
}
