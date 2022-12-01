import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { RouterModule } from '@angular/router';
import { AppEmailDirective } from './validators/app-email.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { ElapsedTimePipe } from './pipes/elapsed-time.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeMessageComponent,
    AppEmailDirective,
    ShortenPipe,
    ElapsedTimePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LoaderComponent,
    WelcomeMessageComponent,
    AppEmailDirective,
    ShortenPipe,
    ElapsedTimePipe
  ]
})
export class SharedModule { }
