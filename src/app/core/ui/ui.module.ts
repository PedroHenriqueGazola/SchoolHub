import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShInputComponent } from './input/input.component';
import { ShRadioComponent } from './radio/radio.component';
import { ShCheckboxComponent } from './checkbox/checkbox.component';
import { ShButtonComponent } from './button/button.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ShInputComponent,
    ShRadioComponent,
    ShCheckboxComponent,
    ShButtonComponent,
  ],
  exports: [
    ShInputComponent,
    ShRadioComponent,
    ShCheckboxComponent,
    ShButtonComponent,
  ],
  imports: [CommonModule, MatIconModule],
})
export class ShUiModule {}
