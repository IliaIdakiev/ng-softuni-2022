import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loadUsers(filter?: string) {
    const query = filter ? `?email_like=${filter}` : ''
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users' + query);
  }
}
