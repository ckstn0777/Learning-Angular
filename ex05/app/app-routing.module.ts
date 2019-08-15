import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex01Compoenent } from './directive/ex01.component';
import { Ex02Compoenent } from './directive/ex02.component';
import { Ex03Compoenent } from './directive/ex03.component';
import { Ex04Compoenent } from './directive/ex04.component';
import { Ex05Compoenent } from './directive/ex05.component';

const routes: Routes = [
  { path: 'ex01', component: Ex01Compoenent},
  { path: 'ex02', component: Ex02Compoenent},
  { path: 'ex03', component: Ex03Compoenent},
  { path: 'ex04', component: Ex04Compoenent},
  { path: 'ex05', component: Ex05Compoenent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
