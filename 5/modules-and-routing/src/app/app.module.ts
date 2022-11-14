import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { RouterModule } from '@angular/router';
import { StandaloneCmpComponent } from './standalone-cmp/standalone-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    StandaloneCmpComponent,
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    UserModule,
    HttpClientModule,
    PostModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
