import { Routes, RouterModule } from '@angular/router';

import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from '../user/components/login/login.component';

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
    redirectTo: 'app'
  },
  {
    path: '**',
    redirectTo: 'app'
  }
];

export default RouterModule.forRoot(routes);
