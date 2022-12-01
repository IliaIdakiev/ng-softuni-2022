import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { RouterModule } from '@angular/router';
import { AppEmailDirective } from './validators/app-email.directive';



@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeMessageComponent,
    AppEmailDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LoaderComponent,
    WelcomeMessageComponent,
    AppEmailDirective
  ]
})
export class SharedModule { }
