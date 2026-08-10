import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SideMenu } from '@shared/side-menu/side-menu';


@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, SideMenu],
  templateUrl: './dashboard.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class Dashboard {}
