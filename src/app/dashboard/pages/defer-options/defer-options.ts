import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-defer-options',
  imports: [],
  templateUrl: './defer-options.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class DeferOptions {}
