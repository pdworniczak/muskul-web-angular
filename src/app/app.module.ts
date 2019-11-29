import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSliderModule,
  GestureConfig
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import 'hammerjs';

import { AppComponent } from './app.component';
import { LoginComponent } from './users/components/login/login.component';
import { ListComponent } from './pushups/components/list/list.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UserService } from './users/services/user.firebase.service';
import { NavigationComponent } from './routes/components/navigation/navigation.component';
import { Routers } from './routes/routes';
import { CommingSoonComponent } from './common/components/comming-soon/comming-soon.component';
import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';
import { LoaderComponent } from './common/components/loader/loader.component';
import { AddComponent } from './pushups/components/add/add.component';
import { AddTestComponent } from './pushups/components/addTest/addTest.component';
import { AddTrainingComponent } from './pushups/components/addTraining/addTraining.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    NavigationComponent,
    CommingSoonComponent,
    PageNotFoundComponent,
    LoaderComponent,
    AddComponent,
    AddTestComponent,
    AddTrainingComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    Routers,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSliderModule
  ],
  providers: [
    UserService,
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
