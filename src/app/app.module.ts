import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './user/components/login/login.component';
import { ListComponent } from './pushup/components/list/list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UserService } from './user/services/user.service';
import { NavigationComponent } from './route/components/navigation/navigation.component';
import RoutesModule from './route/routes';
import { CommingSoonComponent } from './common/components/comming-soon/comming-soon.component';
import { NotFound404Component } from './common/components/not-found404/not-found404.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    NavigationComponent,
    CommingSoonComponent,
    NotFound404Component
  ],
  imports: [
    RoutesModule,
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
