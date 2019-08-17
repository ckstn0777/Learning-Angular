import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { tap } from 'rxjs/operators';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  todos: Todo[];
  url = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    // Http get요청
    // 에러가 나는 이유는 서버로부터의 전달받은 데이터 todos가 Object 타입이기 때문이다.
    // 즉, Object 타입인 todos를 Todo[] 타입인 this.todos에 할당하려 했을 때 발생한 컴파일 에러이다.
    // this.http.get(this.url).subscribe(todos => this.todos = todos);

    // 타입 파라미터를 설정하여 응답 데이터의 타입을 명확히 하면
    // HttpClient.get 메소드는 설정한 타입의 데이터를 방출하는 옵저버블을 반환한다.
    // 일반적인 사용
    // this.http.get<Todo[]>(this.url).subscribe(todos => this.todos = todos);

    /*
      옵션1. responseType
      JSON 데이터가 아닌 텍스트, blob 등의 non-JSON 데이터를 요청하는 경우, responseType 옵션을 사용한다.
    this.http.get('/textfile.txt', { responseType: 'text' })
    .subscribe(data => console.log(data));
    */

    /*
      옵션2. HttpParams - GET 요청은 쿼리 파라미터와 함께 전달할 수 있다
      url = 'http://localhost:3000/todos?id=1&completed=false'; 같은 의미

    const params = new HttpParams()
      .set('id', '1')
      .set('cpmpleted', 'false');

      this.http.get<Todo[]>(this.url, {params})
        .subscribe(todos => this.todos = todos);
    */

    /*
      옵션3. HttpHeaders - 요청헤더를 추가해서 보내고 싶다면...
    const headers = new HttpHeaders()
      .set('Content-type', 'application/json')
      .set('Authoroization', 'my-auth-token');

    this.http.get<Todo[]>(this.url, { headers })
      .subscribe(todos => this.todos = todos);
    */

    /*
      옵션4. HttpResoponse : 특정 헤더 정보나 상태 코드(status code)를 확인
*/
    this.http.get<Todo[]>(this.url, { observe: 'response'})
      .pipe(
        tap(res => console.log(res)),
        tap(res => console.log(res.headers)),
        tap(res => console.log(res.status))
      ).subscribe(todos => this.todos = todos.body); // body써줘야함을 주의
  }
}
