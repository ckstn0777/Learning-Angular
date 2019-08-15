import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TextBlueDirective } from './directive/text-blue.directive';
import { Ex01Compoenent } from './directive/ex01.component';
import { Ex02Compoenent } from './directive/ex02.component';
import { Ex03Compoenent } from './directive/ex03.component';
import { Ex04Compoenent } from './directive/ex04.component';
import { Ex05Compoenent } from './directive/ex05.component';

@NgModule({
  declarations: [
    AppComponent,
    TextBlueDirective,
    Ex01Compoenent,
    Ex02Compoenent,
    Ex03Compoenent,
    Ex04Compoenent,
    Ex05Compoenent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
