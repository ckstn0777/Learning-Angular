import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex01Component } from './typescript/ex01.component';
import { Ex02Component } from './typescript/ex02.component';

const routes: Routes = [
  { path: 'ex01', component: Ex01Component},
  { path: 'ex02', component: Ex02Component}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
