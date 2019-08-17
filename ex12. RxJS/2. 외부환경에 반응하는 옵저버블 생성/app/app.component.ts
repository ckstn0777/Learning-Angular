import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mousePosition$: Observable<Event>;
  posX: number = 0;
  posY: number = 0;

  ngOnInit() {
    // 옵저버블의 생성(DOM 이벤트를 옵저버블로 변환) - TV방송국
    this.mousePosition$ = fromEvent(document, 'mousemove');

    // 주의할 것은 이 시점에 옵저버블은 아무런 동작을 하지 않는다는 것이다. 옵저버블은 구독(subscribe)되기 전까지 동작하지 않는다.
    // 이러한 특성을 갖는 옵저버블을 Cold observable이라 한다.
    // 따라서 옵저버는 옵저버블이 방출하는 모든 데이터 스트림을 빠짐없이 처음부터 받을 수 있다.

    // 옵저버는 옵저버블을 구독하고 옵저버블이 방출한 데이터를 전파받아 사용한다.
    // 여기서 옵저버가 안나타나는데, 이 앵귤러(코드자체)가 옵저버라고 생각할까? 즉, 옵저버가 옵저버블을 구독한거지.
    this.mousePosition$.subscribe(
      (event: MouseEvent) => {
        this.posX = event.clientX;
        this.posY = event.clientY;
      },
      error => console.log(error),
      () => console.log('complete!')
    );
  }
}
