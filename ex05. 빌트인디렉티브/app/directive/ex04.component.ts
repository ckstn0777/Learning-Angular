// 구조 디렉티브
// Angular 4부터 ngIf else가 추가되었다.
import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-ex04',
  template: `
    <h1>예제4. ngIf</h1>
    <p *ngIf="isShow; else elseBlock">안녕. 앵귤러야</p>
    <ng-template #elseBlock>아니, 리액트가 더 좋아</ng-template>
    <button (click)="isShow=!isShow">{{ isShow ? 'Hide' : 'Show'}}</button>

    <hr>
    <h1>예제5. ngFor</h1>
    <input type="text" placeholder="이름을 입력하세요" #name>
    <button (click)="addUser(name.value)">add User</button>
    <ul>
      <li *ngFor="let user of users; let i=index">
        {{i}}: {{user.name}}
        <button (click)="removeUser(user.id)">삭제</button>
      </li>
    </ul>

    <hr>
    <h1>예제6. ngSwitch</h1>
    <input type="text" [(ngModel)]="num" placeholder="숫자를 입력하세요">
    <div [ngSwitch]="num">
      <div *ngSwitchCase="'1'">one</div>
      <div *ngSwitchCase="'2'">two</div>
      <div *ngSwitchCase="'3'">three</div>
    </div>
  `
})
export class Ex04Compoenent {
  isShow = true;
  num: string;

  users: User[] = [
    { id: 1, name: 'Ledd'},
    { id: 2, name: 'Kim'},
    { id: 3, name: 'Uoe'}
  ];

  addUser(name: string) {
    if(name) {
      this.users.push({id: this.getNewUserId(), name});
    }
  }

  removeUser(userid: number) {
    // filter : 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수의 실행 결과가
    // true인 배열 요소의 값만을 추출한 새로운 배열을 반환한다.
    this.users = this.users.filter((user) => user.id !== userid);
  }

  getNewUserId(): number {
    // map: 배열을 순회하며 각 요소에 대하여 인자로 주어진
    // 콜백 함수의 반환값(결과값)으로 새로운 배열을 생성하여 반환한다.
    console.log(this.users.map((user) => user.id)); // [1,2,3]

    return this.users.length ? Math.max(...this.users.map((user) => user.id)) + 1 : 1;
  }
}
