import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type Grade = 'A'|'B'|'F';
@Component({
  selector: 'app-control-flow',
  imports: [],
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

  public toggleContent() {
    this.showContent.update(value => !value);
  }
}
