// @ViewChild 데코레이터의 인자로 탐색대상 클래스명을 지정하고 그 결과를 바인딩할 프로퍼티를 지정한다.
import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // myChild 프로퍼티에 자식 컴포넌트 ChildComponent의 인스턴스가 바인딩된다.
  @ViewChild(ChildComponent) myChild: ChildComponent;

  toggle() {
    // 자식 컴포넌트의 프로퍼티를 직접 변경할 수 있다.
    this.myChild.isShow = !this.myChild.isShow;
  }

  changeText() {
    // 자식 컴포넌트의 메소드를 직접 실행할 수 있다.
    this.myChild.changeText('Hello');
  }
}
