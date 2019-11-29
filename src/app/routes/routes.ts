import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from './routes.enum';
import { AuthGuard } from './guards/auth.guard';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from '../users/components/login/login.component';
import { ListComponent } from '../pushups/components/list/list.component';
import { AddComponent } from '../pushups/components/add/add.component';
import { CommingSoonComponent } from '../common/components/comming-soon/comming-soon.component';
import { PageNotFoundComponent } from '../common/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTES.LOGIN
  },
  {
    path: ROUTES.LOGIN,
    component: LoginComponent
  },
  {
    path: ROUTES.REGISTER,
    component: CommingSoonComponent
  },
  {
    path: ROUTES.APP,
    component: NavigationComponent,

    canActivate: [AuthGuard]
  },
  {
    path: ROUTES.LIST,
    component: ListComponent,

    canActivate: [AuthGuard]
  },
  {
    path: ROUTES.ADD,
    component: AddComponent,

    canActivate: [AuthGuard]
  },
  
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

const Routers = RouterModule.forRoot(routes);

export { Routers }
