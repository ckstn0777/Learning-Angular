import { Component, Inject } from '@angular/core';
import { AppConfig, MY_APP_CONFIG } from './service/app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    /*
    AppConfig 클래스를 토큰으로, 객체 리터럴을 값으로 설정하여
    AppConfig 타입의 인스턴스를 제공
    */
    { provide: AppConfig, useValue: MY_APP_CONFIG},
    // 토큰은 반드시 클래스일 필요는 없다. 이런 경우에는 @Inject 데코레이터를 사용한다.
    { provide: 'API_URL', useValue: 'http://somewhere.io' },
    { provide: 'API_PORT', useValue: 5000 },
    { provide: 'API_PROD', useValue: false }
  ]
})
export class AppComponent {
  constructor(@Inject('API_URL') public apiUrl: string, private appConfig: AppConfig) {
    console.log(appConfig);
    // {url: "http://somewhere.io", port: "5000"}

    console.log(apiUrl);
  }
}
