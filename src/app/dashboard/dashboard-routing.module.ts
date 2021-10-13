import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountsDashboardComponent} from '@dashboard/accounts-dashboard/accounts-dashboard.component';
import {DashboardComponent} from '@dashboard/dashboard.component';
import {SummaryComponent} from '@dashboard/summary/summary.component';
import {AuthGuard} from '@core/guards/auth.guard';
import {NotFoundComponent} from '@app/not-found/not-found.component';
import {AccountPageComponent} from '@dashboard/account-page/account-page.component';
import {DashboardRoutingService} from '@dashboard/dashboard-routing.service';
import {TransferFundsPageComponent} from '@dashboard/transfer-funds-page/transfer-funds-page.component';
import {ProfileComponent} from './profile/profile.component';
import {AvatarUploadComponent} from './profile/avatar-upload/avatar-upload.component';
import {ProfileUpdateComponent} from './profile/profile-update/profile-update.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'summary'
      },
      {
        path: 'summary',
        component: SummaryComponent,
        data: {
          animationState: 'summaryPage'
        }
      },
      {
        path: 'accounts',
        component: AccountsDashboardComponent,
        data: {
          animationState: 'accountsPage'
        }
      },
      {
        path: 'accounts/:id',
        component: AccountPageComponent,
        data: {
          animationState: 'viewAccount'
        }
      },
      {
        path: 'transfer-funds',
        component: TransferFundsPageComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'profile-avatar',
        component: AvatarUploadComponent
      },
      {
        path: 'profile-update',
        component: ProfileUpdateComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    DashboardRoutingService
  ]
})
export class DashboardRoutingModule { }
