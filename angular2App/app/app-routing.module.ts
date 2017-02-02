import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent }   from './modules/admin/admin.component';
import { InfoComponent }      from './modules/info/info.component';
import { CalendarInfoComponent }     from './modules/calendarinfo/calendarinfo.component';

const routes: Routes = [
  { path: '', redirectTo: '/info/0', pathMatch: 'full' },
  { path: 'admin/:id',  component: AdminComponent },
  { path: 'info/0', component: InfoComponent },
  { path: 'info/1', component: InfoComponent },
  { path: 'calendarinfo/0', component: CalendarInfoComponent },
  { path: 'calendarinfo/1', component: CalendarInfoComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
