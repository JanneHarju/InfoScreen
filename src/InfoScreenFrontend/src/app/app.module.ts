import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SimpleTimer } from 'ng2-simple-timer';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminComponent } from './components/admin/admin.component';
import { CalendarAdminComponent } from './components/calendar-admin/calendar-admin.component';
import { CalendarInfoComponent } from './components/calendar-info/calendar-info.component';
import { InfoComponent } from './components/info/info.component';
import { NavMenuComponent } from './components/shared/nav-menu/nav-menu.component';
import { PopupComponent } from './components/shared/popup/popup.component';
import { LoginComponent } from './components/login/login.component';
import { InfoService } from './services/info.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { FocusDirective } from './common/focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CalendarAdminComponent,
    CalendarInfoComponent,
    InfoComponent,
    NavMenuComponent,
    PopupComponent,
    LoginComponent,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    InfoService,
    SimpleTimer,
    AuthGuardService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
