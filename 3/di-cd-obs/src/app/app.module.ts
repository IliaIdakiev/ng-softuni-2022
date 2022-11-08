import { Inject, Injectable, InjectionToken, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
// import { UserService } from './user.service';
// import { TestComponent } from './test/test.component';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class MyClass {
  constructor(sdsa: AppComponent) {
    console.log('Nameless call was constructed');
  }
}

export const myCustomToken = new InjectionToken<string>('Test');
// new InjectionToken('Test');


// const myProvider: Provider = {
//   // useValue: 123,
//   provide: myCustomToken,
//   useClass: MyClass,
//   // provide: MyClass
// };

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    // TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    // UserService,
    // MyClass, // -> { useClass: MyClass, provide: MyClass }
    // myProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
