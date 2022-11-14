import { Component, OnInit } from '@angular/core';
import { GlobalLoaderService } from 'src/app/core/services/global-loader.service';
import { IUser } from 'src/app/shared/interfaces';
import { Test } from 'src/app/test';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: IUser[] | null = null;

  constructor(
    private userService: UserService,
    private globalLoderService: GlobalLoaderService,
    private t: Test
  ) {
    (window as any).t2 = t;
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.globalLoderService.showLoader('Loading users');
    this.userService.loadUsers().subscribe({
      next: (userList) => {
        this.globalLoderService.hideLoader();
        this.userList = userList;
      }
    });
  }

  reloadUsersHandler(): void {
    this.loadUsers();
  }

}
