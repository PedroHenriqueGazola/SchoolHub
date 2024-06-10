import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import type { FormControl } from '@angular/forms';
import { tv } from 'tailwind-variants';
import type { ShInputLayout } from './input.type';

@Component({
  selector: 'sh-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShInputComponent {
  @Input({ required: true }) public control!: FormControl;
  @Input() public label?: string;
  @Input() public icon?: string;
  @Input() public type?: HTMLInputElement['type'] = 'text';
  @Input() public placeholder?: string = '';
  @Input() public layout?: ShInputLayout = 'default';

  public input = tv({
    base: 'p-3 min-h-10 w-full rounded-md border border-gray-300 bg-white text-black',
    variants: {
      layout: {
        default: '',
        suffix: 'pr-10',
        prefix: 'pl-10',
      },
    },
    defaultVariants: {
      layout: 'default',
    },
  });
}
