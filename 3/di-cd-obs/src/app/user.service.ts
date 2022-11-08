import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    // return fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users');
  }
}

export class UserServideMock {
  constructor() { }

  getUsers() {
    return Promise.resolve([{ username: 'Ivan' }]);
  }
}