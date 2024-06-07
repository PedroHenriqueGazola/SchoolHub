import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sh-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
})
export class ShRadioComponent {
  @Output() public readonly change = new EventEmitter<boolean>();
  @Input() public label?: string;
  @Input() public checked?: boolean;

  public onToggle(): void {
    this.checked = !this.checked;

    this.change.emit(this.checked);
  }
}
