import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checkResult: string;

  // 데이터를 입력하고 엔터 키를 눌렀을 때 입력 데이터의 길이를 검사
  // 이와 같이 템플릿 문법으로 거의 대부분의 폼을 구축할 수 있다.
  // 그런데 만약 입력 필드가 하나가 아니라 여러 개 있다면 어떻게 해야 할까?

  // 위 예제와 같은 방식은 비교적 간단한 폼일 때는 유용한 방법이지만 복잡한 폼의 경우,
  // 보다 효과적인 폼 데이터 변경 추적과 유효성 검증 및 에러 처리가 필요하다.
  checkValue(value) {
    this.checkResult = value.length > 3 ? '' : '4자 이상 입력하세요';
  }
}
