import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ThemeListComponent,
    RecentPostsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//    ('Test': class -> instance )            ('Test': class, instance )
// AppModule (Inj) <--> UserModule (Inj) <--> OtherModule (Inj) <--> ... <--> Cmp 1 (@Inject('Test'))
//                        |
//                        ----> Cmp 2 (@Inject('Test'))


@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule
  ],
  bootstrap: [AppComponent]
}) 
class MyModule {

  static withProviders(): ModuleWithProviders<MyModule> {
    return {
      ngModule: MyModule,
      providers: [
        
      ]
    }
  }
  
}

@NgModule({
  declarations: [
    //...
  ],
  imports: [
    MyModule
  ],
  bootstrap: [AppComponent]
})
class OtherModule {
  
}