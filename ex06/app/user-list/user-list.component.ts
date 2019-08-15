import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
  <div class="container">
    <div class="row">
        <div class="col-12 col-sm-6">1 of first row</div>
        <div class="col-12 col-sm-6">2 of first row</div>
    </div>
     <div class="row">
        <div class="col">1 of second row</div>
        <div class="col">2 of second row</div>
    </div>
</div>
  `,
  styles: [`

  `]
})
export class UserListComponent {

}
