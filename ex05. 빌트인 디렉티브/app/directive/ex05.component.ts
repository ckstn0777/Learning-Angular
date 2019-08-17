// 템플릿 참조 변수는 DOM 요소에 대한 참조를 담고 있는 변수이다.
// 템플릿의 요소 내에서 해시 기호(#)를 변수명 앞에 추가하여 템플릿 참조 변수를 선언하면
// 템플릿 참조 변수에 해당 요소에 대한 참조가 할당되고 템플릿 내의 자바스크립트 코드에서는 해시 기호 없이 참조한다.
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex05',
  template: `
    <h1>예제5. 템플릿 참조변수</h1>
    <div>
      <input type="email" placeholder="이메일을 입력하세요" #email>
      <button (click)="checkEmail(email.value)">이메일 형식체크</button>
    </div>
    <span *ngIf="result">{{result}}</span>
  `
})
export class Ex05Compoenent {
  result: string;

  checkEmail(email: string) {
    const regexr = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    if (regexr.test(email)) {
      this.result = '';
    } else {
      this.result = '이메일 주소의 형식이 유효하지 않습니다'
    }

  }
}
