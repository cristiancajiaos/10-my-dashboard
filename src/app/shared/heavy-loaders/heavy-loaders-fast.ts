import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  imports: [NgClass],
  template: `
    <section class="w-full" [ngClass]="cssClass()">
      <ng-content/>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class HeavyLoadersFast {

  cssClass = input.required<string>();

  constructor () {
    console.log('Heavy Loader Fast Creado');
  }
}
