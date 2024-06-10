import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GetControlPipe } from './get-control/get-control.pipe';

@NgModule({
  declarations: [GetControlPipe],
  exports: [GetControlPipe],
  imports: [CommonModule],
})
export class PipesModule {}
