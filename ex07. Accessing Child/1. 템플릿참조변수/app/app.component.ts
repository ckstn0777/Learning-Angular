import { Component } from '@angular/core';
import { CounterComponent } from './counter.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  increase(counter: CounterComponent) {
    counter.increaseCount();
  }
  decrease(counter: CounterComponent) {
    counter.decreaseCount();
  }
}
