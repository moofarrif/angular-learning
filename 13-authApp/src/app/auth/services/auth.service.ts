import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import {
  AuthStatus,
  CheckTokenResponse,
  LoginResponse,
  User,
} from '../interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly BASE_URL = environment.BASE_URL;
  private http = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  constructor() {    
    //  this.checkAuthStatus().subscribe();
  }

  private setAuthentication(user: User, token: string): boolean {
    this._currentUser.set(user);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('token', token);

    return true;
  }

  login(email: string, password: string): Observable<boolean> {
    const URL = `${this.BASE_URL}/auth/login`;

    const body = { email, password };

    return this.http.post<LoginResponse>(URL, body).pipe(
      map(({ user, token }) => this.setAuthentication(user, token)),
      catchError(({ error }) => throwError(() => error.message))
    );
  }

  checkAuthStatus(): Observable<boolean> {
    const URL = `${this.BASE_URL}/auth/check-auth`;
    const TOKEN = localStorage.getItem('token');

    if (!TOKEN)  {
      this.logout();
      return of(false)
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${TOKEN}`);

    return this.http.get<CheckTokenResponse>(URL, { headers }).pipe(
      map(({ user, token }) => this.setAuthentication(user, token)),
      catchError(() => {
        // this._authStatus.set(AuthStatus.notAuthenticated);
        return of(false);
      })
    );
  }

  logout(): void {
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.notAuthenticated);
    localStorage.removeItem('token');
  }
}
