import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

// scan() // reduce

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users$$ = new BehaviorSubject<null | any>(null);
  // private isLoading$$ = new BehaviorSubject(false);

  users$ = this.users$$.asObservable();
  // isLoading$ = this.isLoading$$.asObservable();
  isLoading$ = this.users$.pipe(map(users => users === null))

  constructor(private http: HttpClient) { }

  loadUsers() {
    // this.isLoading$$.next(true);
    this.users$$.next(null)
    this.http.get<any[]>('/api/users').subscribe({
      next: (users) => {
        // this.isLoading$$.next(false);
        this.users$$.next(users);
      }
    });
  }
}
