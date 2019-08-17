import { Component } from '@angular/core';
import { GreetingService } from './service/greeting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  greeting: string;
  greetingService: GreetingService;

  constructor() {
    // 서비스의 인스턴스를 직접 생성
    // 의존 관계의 서비스가 변경되면 코드를 수정해야 한다.
    this.greetingService = new GreetingService();
  }

  sayHi() {
    // 서비스 사용
    this.greeting = this.greetingService.sayHi();
  }
}
