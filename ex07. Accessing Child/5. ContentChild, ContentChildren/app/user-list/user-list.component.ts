import { Component, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { UserComponent } from './user.component';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
  // 부모 컴포넌트가 지정한 콘텐츠 중에서 템플릿 참조 변수 first를 가진 콘텐츠를 취득한다.
  // @ContentChild('first') firstChild: UserComponent; --> 에러나는데... 모르겠음

  // 부모 컴포넌트가 지정한 콘텐츠 중에서 UserComponent 모두를 취득한다.
  @ContentChildren(UserComponent) children: QueryList<UserComponent>;

  changeFirstUserColor() {
    // this.firstChild.randomizeColor();
  }
  changeAllUserColor() {
    this.children.forEach(child => child.randomizeColor());
  }
}
