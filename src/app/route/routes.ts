import { Routes, RouterModule } from '@angular/router';

import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from '../user/components/login/login.component';
import { CommingSoonComponent } from '../common/components/comming-soon/comming-soon.component';
import { NotFound404Component } from '../common/components/not-found404/not-found404.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    component: NavigationComponent
  },
  {
    path: 'register',
    component: CommingSoonComponent
  },
  {
    path: '**',
    component: NotFound404Component
  }
];

export default RouterModule.forRoot(routes);
