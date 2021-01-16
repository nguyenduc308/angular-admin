import { ROUTING_MAP } from '@/constants/routing';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: ROUTING_MAP.auth.children.login,
        pathMatch: 'full',
      },
      {
        path: ROUTING_MAP.auth.children.login,
        component: LoginComponent,
      },
      {
        path: ROUTING_MAP.auth.children.register,
        component: RegisterComponent,
      },
    ],
  },
];
export const AuthRoutingModule = RouterModule.forChild(authRoutes);
