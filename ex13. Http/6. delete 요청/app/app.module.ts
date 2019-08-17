import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// @angular/common/http 패키지의 HttpClientModule을 임포트한다.
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  // 방법2.providedIn 프로퍼티를 사용해서 설정하는것과 같은 의미
  providers: [/*GreetingService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
