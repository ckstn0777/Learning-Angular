import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 템플릿 기반 폼 사용을 위해 추가
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
