import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Ex01Component } from './binding/ex01.component';
import { AppRoutingModule } from './app-routing.module';
import { Ex02Component } from './binding/ex02.component';
import { Ex03Component } from './binding/ex03.component';
import { Ex04Component } from './binding/ex04.component';
import { Ex05Component } from './binding/ex05.component';
import { Ex06Component } from './binding/ex06.component';
import { Ex07Component } from './binding/ex07.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex01Component,
    Ex02Component,
    Ex03Component,
    Ex04Component,
    Ex05Component,
    Ex06Component,
    Ex07Component
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
