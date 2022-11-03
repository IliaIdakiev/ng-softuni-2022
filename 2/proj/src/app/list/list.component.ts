import { Component } from '@angular/core';
import { IUser } from '../interfaces';
import { ICustomEvent } from '../list-item/list-item.component';

const myNumber = 1;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  users: IUser[] = [
    {
      firstName: 'Ivan',
      lastName: 'Ivanov'
    },
    {
      firstName: 'Petar',
      lastName: 'Petrov'
    }
  ];

  selectedUserIndex: null | number = null;

  showLastName = true;
  myNumber = myNumber;

  get showSelectedIndex(): boolean {
    return (this.selectedUserIndex === null ? -1 : this.selectedUserIndex) >= 0;
  }

  constructor() { }

  handleClickEvent(event: MouseEvent) {
    console.log(event);
    this.showLastName = !this.showLastName;
  }

  listItemClickHandler(index: number) {
    if (this.selectedUserIndex === index) {
      this.selectedUserIndex = null;
      return;
    }
    this.selectedUserIndex = index;
  }

  customEventHandler($event: ICustomEvent) {
    console.log($event);
  }

}
