import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyNgIfDirective } from './custom-structure-directive/my-ng-If.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyNgIfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
