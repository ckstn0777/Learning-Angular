import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-sibling2',
  template: `
    <h2>Sibling-1</h2>
    <p>message: {{message}}</p>
    <input type="text" (input)="message = $event.target.value" placeholder="message">
  `,
  styles: [`
    :host {
      display: block;
      padding: 10px;
      background-color: aliceblue;
    }
  `]
})
export class Siblings2Component {
  constructor(private dataService: DataService) {}

  get message(): string {
    return this.dataService.message;
  }
  set message(newMessage: string) {
    this.dataService.message = newMessage;
  }
}
