import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { AllUsersComponent } from './customComponents/all-users/all-users.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './customComponents/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'users', component: AllUsersComponent, children: [
          {path: 'posts/:id', component: UserComponent}
        ]},
      ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
