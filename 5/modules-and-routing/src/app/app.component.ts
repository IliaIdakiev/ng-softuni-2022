import { Component } from '@angular/core';
import { Test } from './test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modules-and-routing';
  constructor(private t: Test) {
    (window as any).t3 = t;
  }
}
