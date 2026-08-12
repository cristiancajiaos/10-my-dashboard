import { HttpClient } from '@angular/common/http';
import { Service, computed, inject, signal } from '@angular/core';
import { User, UsersResponse } from '@interfaces/req-response';
import { environment } from '../../environments/environment.development';
import { delay, map, Observable } from 'rxjs';
import { UserResponse } from '@interfaces/user-response';

interface State {
  users: User[];
  loading: boolean;
}

@Service()
export class UsersService {
  private http = inject(HttpClient);

  environment = environment;

  #state = signal<State>({
    users: [],
    loading: false,
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    console.log('Cargando data...');
    this.http
      .get<UsersResponse>(`${environment.baseUrl}/users`)
      .pipe(delay(1500))
      .subscribe((res) => {
        this.#state.set({
          users: res.data,
          loading: false,
        });
      });
  }

  getUserById(id: string): Observable<User> {
    return this.http
      .get<UserResponse>(`${environment.baseUrl}/users/${id}`)
      .pipe(
        delay(1500),
        map((res) => res.data)
      );
  }
}
