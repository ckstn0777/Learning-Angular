import { Injectable } from '@angular/core';

@Injectable(
  // 방법1. 인스턴스 생성 정보를 설정하여 의존성 인스턴스의 주입을 지시하는 것을 프로바이더(provider)
  // providedIn: 'root'
)
export class GreetingService {
  sayHi() {
    return 'Hi';
  }
}
