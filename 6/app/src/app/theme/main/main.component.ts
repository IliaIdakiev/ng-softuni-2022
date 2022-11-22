import { Component, DoCheck } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements DoCheck {

  // get isLoggedIn() {
  //   return this.authService.isLoggedIn;
  // }

  isLoggedIn = false;


  constructor(private authService: AuthService) {

  }

  ngDoCheck(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

}
