import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent }   from './modules/admin/admin.component';
import { InfoComponent }      from './modules/info/info.component';
import { CalendarInfoComponent }     from './modules/calendarinfo/calendarinfo.component';
import { CalendarAdminComponent } from './modules/calendaradmin/calendaradmin.component';
import { PopupComponent} from './modules/shared/popup/popup.component';
import { AuthGuard }                from './auth-guard.service';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', redirectTo: '/info/0', pathMatch: 'full' },
  { path: 'admin/:id',  component: AdminComponent, canActivate: [AuthGuard], },
  { path: 'calendaradmin/:id',  component: CalendarAdminComponent, canActivate: [AuthGuard], },
  { path: 'info/0', component: InfoComponent },
  { path: 'info/1', component: InfoComponent },
  { path: 'calendarinfo/0', component: CalendarInfoComponent },
  { path: 'popup', component: PopupComponent, outlet: 'popup' },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
