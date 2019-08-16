import { Component, Input } from '@angular/core';
import { Checkbox } from '../app.component';

@Component({
  selector: 'child',
  template: `
    <input type="checkbox" [id]="checkbox.id" [checked]="checkbox.checked">
    <label [for]="checkbox.id">
      {{ checkbox.label }}
    </label>
  `
})
export class ChildComponent {
  @Input() checkbox: Checkbox;
}
