import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GreetingService } from './service/greeting.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  // 방법2.providedIn 프로퍼티를 사용해서 설정하는것과 같은 의미
  providers: [/*GreetingService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
