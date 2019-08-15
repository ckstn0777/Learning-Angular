import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex01Component } from './binding/ex01.component';
import { Ex02Component } from './binding/ex02.component';
import { Ex03Component } from './binding/ex03.component';
import { Ex04Component } from './binding/ex04.component';
import { Ex05Component } from './binding/ex05.component';
import { Ex06Component } from './binding/ex06.component';
import { Ex07Component } from './binding/ex07.component';

const routes: Routes = [
  { path: 'ex01', component: Ex01Component},
  { path: 'ex02', component: Ex02Component},
  { path: 'ex03', component: Ex03Component},
  { path: 'ex04', component: Ex04Component},
  { path: 'ex05', component: Ex05Component},
  { path: 'ex06', component: Ex06Component},
  { path: 'ex07', component: Ex07Component},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
