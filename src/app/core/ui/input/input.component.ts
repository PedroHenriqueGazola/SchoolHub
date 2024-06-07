import { Component, Input } from '@angular/core';

@Component({
  selector: 'sh-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class ShInputComponent {
  @Input() public label?: string;
}
