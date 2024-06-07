import { Component, Input } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'sh-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class ShCheckboxComponent {
  @Input() public label?: string;
  @Input() public checked?: boolean;

  public id = uuid();
}
