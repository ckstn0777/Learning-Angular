//
import { Component, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from './view-children/child.component';

export interface Checkbox {
  id: number;
  label: string;
  checked: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  checkboxs: Checkbox[] = [
    {id: 1, label: 'HTML', checked: true},
    {id: 2, label: 'CSS', checked: false},
    {id: 3, label: 'javascript', checked: false}
  ];
  active:boolean = false;
  /*
    @ViewChildren 데코레이터는 여러개의 자식 요소를 취득한다.
    이때 취득된 자식 요소를 바인딩할 프로퍼티의 타입은 QueryList이다.
  */
  @ViewChildren(ChildComponent) myChildren: QueryList<ChildComponent>;

  toggle() {
    this.active = !this.active;
    /*
      자식 컴포넌트들을 순회하며 자식 컴포넌트의 공개된 프로퍼티 checkbox를 변경한다.
      QueryList는 마치 자바스크립트 배열과 같이 사용할 수 있다.
    */
    this.myChildren.forEach(child => child.checkbox.checked = this.active);
  }

}
