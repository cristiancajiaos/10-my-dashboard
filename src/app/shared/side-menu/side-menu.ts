import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
})
export class SideMenu {

  public menuItems = routes.map(route => route.children ?? [])
  .flat()
  .filter(route => route && route.path != '' && route.path != '**')
  .filter(route => !route.path?.includes(':'));
}
