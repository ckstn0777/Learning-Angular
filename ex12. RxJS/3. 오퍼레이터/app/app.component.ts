import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, from } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  myArray = [1, 2, 3, 4, 5];
  subscription: Subscription;
  values: number[] = [];

  ngOnInit() {
    // 옵저버블 생성
    const observable$ = from(this.myArray);

    // 구독하기전에 변형 후 구독
    this.subscription = observable$
      .pipe(
        // 오퍼레이터에 의한 옵저버블 변형
        map(item => item * 2), // 2, 4, 6, 8, 10
        filter(item => item > 5), // 6, 8, 10
        tap(item => console.log(item)) // 6, 8, 10
      ).subscribe( // 옵저버블 구독(subscribe 안이 옵저버인셈)
        // next
        value => this.values.push(value),
        // err
        error => console.log(error),
        // complete
        () => console.log('Streaming finished')
      );
  }

  ngOnDestroy(): void {
    // 옵저버블 구독 해지
    this.subscription.unsubscribe();
  }
}
