import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '@services/users-service';
import { Title } from '@shared/title/title';

@Component({
  selector: 'app-users',
  imports: [Title, RouterLink, JsonPipe],
  templateUrl: './users.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
})
export default class Users {

  public usersService = inject(UsersService);


}
