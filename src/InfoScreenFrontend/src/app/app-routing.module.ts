import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CalendarAdminComponent } from './components/calendar-admin/calendar-admin.component';
import { InfoComponent } from './components/info/info.component';
import { CalendarInfoComponent } from './components/calendar-info/calendar-info.component';
import { PopupComponent } from './components/shared/popup/popup.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/info/0', pathMatch: 'full' },
  { path: 'admin/:id',  component: AdminComponent, canActivate: [AuthGuardService], },
  { path: 'calendaradmin/:id',  component: CalendarAdminComponent, canActivate: [AuthGuardService], },
  { path: 'info/0', component: InfoComponent },
  { path: 'info/1', component: InfoComponent },
  { path: 'calendarinfo/0', component: CalendarInfoComponent },
  { path: 'popup', component: PopupComponent, outlet: 'popup' },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
