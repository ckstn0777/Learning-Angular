// 디렉티브(Directive / 지시자)는 “DOM의 모든 것(모양이나 동작 등)을 관리하기 위한 지시(명령)”이다.
// HTML 요소 또는 어트리뷰트의 형태로 사용하여 디렉티브가 사용된 요소에게 무언가를 하라는 지시(directive)를 전달한다.

// 디렉티브는 애플리케이션 전역에서 사용할 수 있는 공통 관심사를
// 컴포넌트에서 분리하여 구현한 것으로 컴포넌트의 복잡도를 낮추고 가독성을 향상시킨다.
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex01',
  template: `
    <h1>예제1. 내가 만든 디렉티브 사용 예</h1>
    <div textBlue>textBlue directive</div>
  `
})
export class Ex01Compoenent {

}
