import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './users/components/login/login.component';
import { ListComponent } from './pushups/components/list/list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UserService } from './users/services/user.service';
import { NavigationComponent } from './routes/components/navigation/navigation.component';
import RoutesModule from './routes/routes';
import { CommingSoonComponent } from './common/components/comming-soon/comming-soon.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    NavigationComponent,
    CommingSoonComponent,
    PageNotFoundComponent
  ],
  imports: [
    RoutesModule,
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
