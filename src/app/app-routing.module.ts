import { RouterModule, Routes } from '@angular/router';
import { ROUTING_MAP } from './constants/routing';
import { UnAuthGuard } from './shared/guards/un-auth.guard';
import { LayoutNoSidebarComponent } from './shared/layout/layout-no-sidebar/layout-no-sidebar.component';

const appRouting: Routes = [
  {
    path: ROUTING_MAP.home.root,
    component: LayoutNoSidebarComponent,
  },
  {
    path: ROUTING_MAP.auth.root,
    canLoad: [UnAuthGuard],
    component: LayoutNoSidebarComponent,
    loadChildren: () => import('@/auth/auth.module').then((m) => m.AuthModule),
  },
];

export const AppRoutingModule = RouterModule.forRoot(appRouting);
