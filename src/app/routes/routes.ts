import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from './routes.enum';
import { AuthGuard } from './guards/auth.guard';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from '../users/components/login/login.component';
import { CommingSoonComponent } from '../common/components/comming-soon/comming-soon.component';
import { PageNotFoundComponent } from '../common/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES.LOGIN,
    pathMatch: 'full'
  },
  {
    path: ROUTES.LOGIN,
    component: LoginComponent
  },
  {
    path: ROUTES.APP,
    component: NavigationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ROUTES.REGISTER,
    component: CommingSoonComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export default RouterModule.forRoot(routes);
