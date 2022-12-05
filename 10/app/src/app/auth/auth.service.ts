import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, catchError, filter, of, Subscription, tap, throwError } from 'rxjs';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$.asObservable().pipe(
    filter((val): val is IUser | null => val !== undefined)
  );

  user: IUser | null = null;

  get isLoggedIn() {
    return this.user !== null;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      this.user = user;
    });
  }

  register(username: string, email: string, password: string, rePassword: string, tel?: string) {
    return this.http.post<IUser>('/api/register', { username, email, password, rePassword, tel })
      .pipe(tap(user => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    return this.http.post<any>('/api/login', { email, password })
      .pipe(tap(user => this.user$$.next(user)));;
  }

  logout() {
    return this.http.post<void>('/api/logout', {})
      .pipe(tap(() => this.user$$.next(null)));;
  }

  getProfile() {
    return this.http.get<IUser>('/api/users/profile')
      .pipe(
        tap(user => this.user$$.next(user)),
        catchError((err) => {
          this.user$$.next(null);
          return throwError(() => err);
        })
      );
  }

  setProfile(username: string, email: string, tel?: string) {
    return this.http.put<IUser>('/api/users/profile', { username, email, tel })
      .pipe(tap(user => this.user$$.next(user)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
