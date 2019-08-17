//
import { Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // 브라우저가 웹 컴포넌트를 지원한다는 전제 하에 웹 컴포넌트의 Shadow DOM을 이용하여 뷰 캡슐화(View Encapsulation)를 구현할 수도 있다.
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {


}
