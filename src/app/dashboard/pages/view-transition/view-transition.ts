import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-view-transition',
  imports: [],
  templateUrl: './view-transition.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class ViewTransition {}
