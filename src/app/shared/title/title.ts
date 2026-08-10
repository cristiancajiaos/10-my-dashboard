import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class Title {}
