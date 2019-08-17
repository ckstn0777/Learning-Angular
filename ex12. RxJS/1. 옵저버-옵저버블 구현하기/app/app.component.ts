import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // 옵저버이 옵저버블을 구독할 때 호출되는 구독함수.(데이터를 송출). TV방송국이 송출할 내용
    const subscriber = (observer) => {
      try {
          // next 데이터를 방출
          observer.next(1);
          observer.next(2);

          observer.complete();
      } catch (err) {
        // err 데이터 방출
        observer.error(err);
      } finally {
        // 구독 해지될 때 호출되는 콜백 함수
        return () => console.log('Unsubscribed!');
      }
    };

    // 옵저버블 생성. 즉, Tv방송국
    const observable$ = new Observable(subscriber);

    // TV가 TV방송국을 구독함. 값을 전달받음. next-error-complete순서임
    observable$.subscribe(
      // 옵저버블이 방출한 next에 반응하는 next메소드
      value => console.log(value),
      // 옵저버블이 방출한 error 노티피케이션에 반응하는 error 메소드
      error => console.log(error),
      // 옵저버블이 방출한 complete 노티피케이션에 반응하는 complete 메소드
      () => console.log('Complete')
    );
  }
}
