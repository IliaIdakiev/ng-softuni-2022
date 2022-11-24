import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser | null = {
    username: 'John',
    email: 'test@gmail.bg',
    tel: '00359 123123123'
  } as any;

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor() { }
}
