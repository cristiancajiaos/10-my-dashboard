import { ChangeDetectionStrategy, Component, inject, signal, computed } from '@angular/core';
import { Title } from '@shared/title/title';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { UsersService } from '@services/users-service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [Title],
  templateUrl: './user.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
})
export default class User {

  private activatedRoute = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  public titleLabel = computed(() => {
    return `Información del usuario${this.user() ? ':' : ''} ${this.user() ? this.user()?.first_name : ''} ${this.user() ? this.user()?.last_name : ''}`
  });

  // public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.usersService.getUserById(id))
    )
  );

  constructor() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    });
  }
}
