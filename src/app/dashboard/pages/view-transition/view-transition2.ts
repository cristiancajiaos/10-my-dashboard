import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@shared/title/title';

@Component({
  selector: 'app-view-transition',
  imports: [Title],
  template: `
    <section class="view-transition">
      <app-title title="View Transition 2"/>
      <section class="flex justify-end">
        <img srcset="https://picsum.photos/id/237/200/300"
             alt="Picsum"
             width="200"
             height="300"
             style="view-transition-name: hero1" />
        <div class="fixed bottom right-16 bottom-10 bg-blue-800 w-32 h-32 rounded"
             style="view-transition-name: hero2">
        </div>
      </section>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
})
export default class ViewTransition {}
