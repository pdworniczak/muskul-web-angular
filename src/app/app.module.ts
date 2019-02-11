import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { ListComponent } from './pushups/list/list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UserService } from './user/service/user.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'app',
    component: ListComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
