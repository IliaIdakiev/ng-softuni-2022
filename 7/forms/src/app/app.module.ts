import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyRouterLinkDirective } from './my-router-link.directive';
import { MyIfDirective } from './my-if.directive';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaxCountDirective } from './max-count.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyRouterLinkDirective,
    MyIfDirective,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    MaxCountDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // for template driven forms
    ReactiveFormsModule, // for in class forms that we have to bind in the template
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
