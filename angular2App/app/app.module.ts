import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Configuration } from './app.constants';
import { AppRoutingModule } from './app-routing.module';

import { InfoComponent }     from './modules/info/info.component';
import { CalendarInfoComponent }     from './modules/calendarinfo/calendarinfo.component';
import { InfoService }         from './services/info.service';
import { AdminComponent } from './modules/admin/admin.component';
import { CalendarAdminComponent } from './modules/calendaradmin/calendaradmin.component';
import { NavMenuComponent } from './modules/shared/navmenu/navmenu.component'
import { AppComponent }  from './app.component';
import { SimpleTimer } from 'ng2-simple-timer';
import { PopupComponent} from './modules/shared/popup/popup.component';
import { LoginComponent } from './login.component';
import { AuthGuard }            from './auth-guard.service';
import { AuthService }          from './auth.service';
import { FocusDirective } from './focus.directive';
import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    InfoComponent,
    CalendarInfoComponent,
    AdminComponent,
    CalendarAdminComponent,
    NavMenuComponent,
    PopupComponent,
    LoginComponent,
    FocusDirective,
  ],
  providers: [
    InfoService,
    SimpleTimer,
    AuthGuard,
    AuthService,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
