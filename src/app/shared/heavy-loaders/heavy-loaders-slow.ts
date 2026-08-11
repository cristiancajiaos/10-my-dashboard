import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [NgClass],
  template: `
    <section class="w-full h-600px" [ngClass]="cssClass()">
      Heavy Loader Slow
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class HeavyLoadersSlow {

  cssClass = input.required<string>();
  constructor() {
    console.log('HeavyLoader Component');
    const start = Date.now();
    while (Date.now() - start < 3000) {

    }

    console.log('Cargado');
  }
}
