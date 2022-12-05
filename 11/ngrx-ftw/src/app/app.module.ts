import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers } from './+store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CustomSerializer } from './+store/router';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './+store/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreRouterConnectingModule.forRoot({ serializer: CustomSerializer }),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({ logOnly: !isDevMode() }),
    EffectsModule.forRoot([Effects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
