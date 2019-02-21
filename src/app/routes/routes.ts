import { Routes, RouterModule } from '@angular/router';

import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from '../users/components/login/login.component';
import { CommingSoonComponent } from '../common/components/comming-soon/comming-soon.component';
import { PageNotFoundComponent } from '../common/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
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
    component: PageNotFoundComponent
  }
];

export default RouterModule.forRoot(routes);
