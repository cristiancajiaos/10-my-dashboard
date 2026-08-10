import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-defer-views',
  imports: [],
  templateUrl: './defer-views.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class DeferViews {}
