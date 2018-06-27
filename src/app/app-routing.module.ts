import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { PendingIncidentComponent } from './index-content-pending-incident/pending-incident.component';
import { WaitingIncidentComponent } from './index-content-waiting-incident/waiting-incident.component';
import { DetailsIncidentComponent } from './index-content-details-incident/details-incident.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  // 配置index下面两个子路由pendingIncident和waitingIncident，再到需要显示的区域配置路由入口<router-outlet>
  // 最后在跳转的地方加上链接index/pendingIncident即可
  {
    path: 'index',
    component: IndexComponent,
    children: [
      { path: 'pendingIncident', component: PendingIncidentComponent},
      { path: 'waitingIncident', component: WaitingIncidentComponent},
      { path: 'detailsIncident', component: DetailsIncidentComponent},
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
