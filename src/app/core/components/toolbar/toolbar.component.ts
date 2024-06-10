import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShUiModule } from '../../ui/ui.module';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'toolbar',
  standalone: true,
  imports: [CommonModule, ShUiModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  public searchControl = new FormControl();
}
