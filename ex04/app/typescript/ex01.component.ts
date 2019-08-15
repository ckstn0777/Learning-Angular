import { Component } from '@angular/core';

// 클래스안에 클래스 선언 불가
class Person {
  /*
  접근 제한자가 선언된 생성자 파라미터 x는 클래스 프로퍼티로 선언되고 지동으로 초기화된다.
  public이 선언되었으므로 x는 클래스 외부에서도 참조가 가능하다.
  */
  constructor(public name: string, private age: number) {
    this.name = name;
    this.age = age;
  }
}

@Component({
  selector: 'app-ex01',
  template: `
    <h1>예제1. 타입스크립트 기초 사용법.</h1>
    <p>이름 : {{name1}}</p>
    <input type="text" #inputA> / <input type="text" #inputB><button (click)="divide(inputA.value, inputB.value)">계산</button>
    <p>결과: {{result}}</p>
  `
})
export class Ex01Component {
  // 1. 앵귤러클래스안에는 변수앞에 let, const, function를 못쓴다...
  // 2. 변수에 값을 바로 넣는경우에는 타입을 굳이 안써준다. 초기값을 지정하지 않는경우에는 써주는게 좋다
  // 3. 클래스 프로퍼티를 사전 선언하여야 한다.
  // 4. 접근지정자 사용가능. 생략하면 public으로 자동지정됨. public은 클래스내부, 자식클래스 내부, 클래스 인스턴스 다 사용가능
  // protected는 클래스내부, 자식클래스 내부에서 사용가능. private은 자기자신 클래스내부에서만 사용가능하다.

  name2: string;
  result: number;
  constructor() {}

  foo = new Person('ckstn', 20);
  name1 = this.foo.name;
  // age1 = this.foo.age; 접근불가능하다.

  setName() {
    this.name1 = this.foo.name;
  }

  // 클래스안에서는 함수선언만 가능할뿐 실행은 못한다. 실행은 함수내부에서 가능
  divideFunc(x: number, y: number, callback): any {
    console.log(typeof(x));
    if(y === 0) {
      callback('0으로 나눌수 없습니다', null);
      return;
    }
    callback(null, x / y);
  }

  divide(a, b) {
    console.log(typeof(a));
    this.divideFunc(Number(a), Number(b), (err, result) => {
      if (err) {
        console.log(err);
        alert(err);
        return;
      }
      this.result = result;
    });
  }

  // 불가능 -> divideFunc(100, 10);
  /*
  불가능한 경우.
  divideFunc(100, 10, (err: any, result: any) => {
    if(err) {
        console.log(err);
        return;
    }
    this.result = result;
  });
*/
}
