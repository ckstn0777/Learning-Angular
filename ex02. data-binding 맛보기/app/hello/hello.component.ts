// 이 예제에서는 데이터 바인딩이라는 기능을 사용하고 있다.
// 차차 알아볼 것이지만, 간단히 설명하면 {{}}는 단방향 바인딩이라고 해서 컴포넌트가 데이터를 템플릿으로 넘겨줄때 사용.
// (click)은 이벤트 바인딩이라고 해서 버튼을 클릭하면 setName함수가 실행됨.
// 이때 inputYourname은 템플릿 변수라고 해서 input의 DOM 객체를 담고 있음. 따라서 value를 뽑아서 사용자가 입력한 값을
// name을 통해 보여줄 수 있게됨.

import { Component } from '@angular/core';

@Component({
  selector : 'app-hello',
  template: `
    <h2>안녕하세요. {{name}}</h2>
    <input type="text" placeholder="이름을 입력하세요" #inputYourname>
    <button (click)="setName(inputYourname.value)">등록</button>
  `
})
export class HelloComponent {
  name: string;

  setName(name: string) {
    this.name = name;
  }
}
