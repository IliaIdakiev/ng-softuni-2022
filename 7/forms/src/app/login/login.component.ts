import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm', { static: true }) loginForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
    // this.loginForm.valueChanges?.subscribe(console.log);
  }

  ngAfterViewInit(): void {

  }

  handleFormSubmit(form: NgForm): void {
    if (form.invalid) { return; }
    const value: { email: string; password: string } = form.value;
    form.setValue({ email: '', password: '' });
    console.log(value);
  }

}
