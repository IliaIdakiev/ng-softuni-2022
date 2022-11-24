import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  get isLoggedIn() {
    return this.authServie.isLoggedIn;
  }

  constructor(private authServie: AuthService) { }

}
