import { Title } from '@shared/title/title';
import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-change-detection',
  imports: [Title, JsonPipe],
  templateUrl: './change-detection.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ChangeDetection {
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  public currentFramework = computed(() => `Change detection - ${this.frameworkAsSignal().name}`)

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update((value) => ({
        ...value,
        name: 'React',
      }));
      console.log('Hecho');
    }, 3000);
  }
}
