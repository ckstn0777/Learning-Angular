import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Ex01Component } from './typescript/ex01.component';
import { AppRoutingModule } from './app-routing.module';
import { Ex02Component } from './typescript/ex02.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex01Component,
    Ex02Component
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
