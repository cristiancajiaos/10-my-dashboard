import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Title } from '@shared/title/title';

type Grade = 'A'|'B'|'F';
@Component({
  selector: 'app-control-flow',
  imports: [Title],
  templateUrl: './control-flow.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
})
export default class ControlFlow {

  public showContent = signal(false);
  public grade = signal<Grade>('A');

  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  public frameworks2 = signal(['Angular']);

  public toggleContent() {
    this.showContent.update(value => !value);
  }
}
