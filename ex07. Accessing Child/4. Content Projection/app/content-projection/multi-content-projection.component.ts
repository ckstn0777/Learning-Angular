import { Component } from '@angular/core';

@Component({
  selector: 'multi-content-projection',
  template: `
    <h3>Multi-slot content projection</h3>
    <div>
      <ng-content select="header"></ng-content>
      <ng-content select="section"></ng-content>
      <ng-content select="footer"></ng-content>
    </div>
  `
})
export class MultiContentProjectionComponent {

}
