// 데이터 공유 서비스 DataService의 인스턴스는 싱글턴으로 동작하여야 한다. 실제로 그렇게 동작한다.
import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-sibling1',
  template: `
    <h2>Sibling-1</h2>
    <p>message: {{message}}</p>
    <input type="text" (input)="message = $event.target.value" placeholder="message">
  `,
  styles: [`
    :host {
      display: block;
      padding: 10px;
      background-color: antiquewhite;
    }
  `]
})
export class Siblings1Component {
  constructor(private dataService: DataService) {}

  // getter를 통해 데이터 공유 서비스 DataService의 message 프로퍼티에 값을 참조하고
  get message(): string {
    return this.dataService.message;
  }
  // setter를 통해 데이터 공유 서비스 DataService의 message 프로퍼티에 값을 할당한다.
  set message(newMessage: string) {
    this.dataService.message = newMessage;
  }
}
