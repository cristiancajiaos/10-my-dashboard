import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  imports: [],
  templateUrl: './side-menu.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class SideMenu {}
