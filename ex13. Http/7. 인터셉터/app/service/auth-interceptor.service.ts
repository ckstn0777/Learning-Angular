import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  // ① intercept 메소드는 2개의 파라미터를 갖는다.
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // AuthService 서버스로 부터 인증 토큰를 취득한다(잠정 처리)
    const authToken = this.auth.getToken();

    // ② 헤더에 인증 토큰을 추가한 새로운 HttpRequest 객체를 생성(클론)한다
    const cloneRequest = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });

     /* ③ 클론한 HttpRequest 객체를 원본 HttpRequest 객체 대신 다음 미들웨어 체인으로 전달한다.
       다음 인터셉터가 없는 경우, Observable을 반환하고 종료한다. */
    return next.handle(cloneRequest);
  }
}
