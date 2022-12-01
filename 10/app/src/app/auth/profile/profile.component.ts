import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  showEditMode = false;
  formSubmitted = false;

  counter = 1;

  get user() {
    const { username, email, tel: telephone } = this.authServie.user!;
    const [ext, ...tel] = telephone.split(' ');
    return {
      username,
      email,
      tel: tel.join(' '),
      ext
    };
  }

  get addresssesArray() {
    return (this.form.get('addresses') as FormArray);
  }

  form!: FormGroup;

  constructor(private fb: FormBuilder, private authServie: AuthService) {
    this.createForm({ ...this.user, addresses: [{ postCode: 'Hello', street: 'World' }] });
  }

  createForm(formValue: any) {
    this.form = this.fb.group({
      username: [formValue.username, [Validators.required, Validators.minLength(5)]],
      email: [formValue.email, [Validators.required, appEmailValidator(appEmailDomains)]],
      ext: [formValue.ext],
      tel: [formValue.tel],
      addresses: this.fb.array(
        new Array(this.counter).fill(null).map((_, i) => {
          return this.fb.group({
            postCode: formValue.addresses[i]?.postCode || '',
            street: formValue.addresses[i]?.street || ''
          })
        })
      )
    })

  }

  addNewAddress(): void {
    this.counter++;
    this.createForm(this.form.value);
  }

  toggleEditMode(): void {
    this.showEditMode = !this.showEditMode;
    if (this.showEditMode) {
      this.formSubmitted = false;
    }
  }

  saveProfile(): void {
    this.formSubmitted = true;
    if (this.form.invalid) { return; }
    const { username, email, ext, tel } = this.form.value;
    this.authServie.setProfile(username, email, ext + ' ' + tel).subscribe(() => {
      this.toggleEditMode();
    });
  }
}
