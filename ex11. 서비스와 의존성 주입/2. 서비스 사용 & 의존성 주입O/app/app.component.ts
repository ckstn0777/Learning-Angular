import { Component } from '@angular/core';
import { GreetingService } from './service/greeting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // 방법3.
  // @Component나 @NgModule 의 providers 프로퍼티를 사용해서 설정할수도 있다
  // 이때는 서비스의 주입범위가 달라진다
  providers: [{
    // 의존성 인스턴스의 타입(토큰, Token)
    provide: GreetingService,
    // 의존성 인스턴스를 생성할 클래스
    useClass: GreetingService
  }]
})
export class AppComponent {
  greeting: string;

  // Angular가 서비스의 인스턴스를 생성하여 컴포넌트에게 전달(주입, inject)해 줄 것이다
  constructor(private greetingService: GreetingService) {

  }

  sayHi() {
    // 서비스 사용
    this.greeting = this.greetingService.sayHi();
  }
}
