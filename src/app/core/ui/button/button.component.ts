import { Component, Input } from '@angular/core';
import { tv } from 'tailwind-variants';
import {
  ShButtonLayout,
  ShButtonShape,
  ShButtonSize,
  ShButtonTheme,
} from './button.type';

@Component({
  selector: 'sh-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ShButtonComponent {
  @Input() public label?: string;
  @Input() public disabled?: boolean = false;
  @Input() public theme?: ShButtonTheme = 'solid';
  @Input() public layout?: ShButtonLayout = 'default';
  @Input() public icon?: string;
  @Input() public size?: ShButtonSize = 'base';
  @Input() public shape: ShButtonShape = 'default';

  public button = tv({
    base: 'flex items-center justify-center truncate font-medium transition-all duration-300 ease-in-out',
    variants: {
      theme: {
        solid:
          'text-white border-none bg-primary hover:bg-secondary active:bg-tertiary',
        outline:
          'text-primary border border-primary bg-transparent hover:bg-primary hover:text-white active:bg-tertiary active:text-white',
        transparent:
          'text-primary border-none bg-transparent hover:bg-gray-100 active:bg-gray-200',
      },
      layout: {
        default: '',
        suffix: 'gap-2',
        prefix: 'flex-row-reverse gap-2',
        icon: 'gap-2',
      },
      size: {
        full: 'w-full text-sm h-12',
        xl: 'h-14 px-8 text-base',
        lg: 'h-12 px-7 text-sm',
        base: 'h-10 px-5 text-sm',
        xs: 'h-8 px-4 text-xs',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50 pointer-events-none',
      },
      shape: {
        default: 'rounded-lg',
        rounded: 'rounded-full',
      },
    },
    defaultVariants: {
      theme: 'solid',
      layout: 'default',
      size: 'base',
      shape: 'default',
    },
  });
}
