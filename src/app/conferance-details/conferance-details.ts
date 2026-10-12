import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import type { Conference } from '../conferance-list/conferance-list';

@Component({
  selector: 'app-conferance-details',
  imports: [],
  templateUrl: './conferance-details.html',
  styleUrl: './conferance-details.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConferanceDetails {
  conf = input<Conference>({ name: '', date: '', location: '' });
  increment = output<void>();

  inc() {
    this.increment.emit();
  }
}
