import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { Configuration } from './app.constants';
import { AppRoutingModule } from './app-routing.module';

import { InfoComponent }     from './modules/info/info.component';
import { InfoService }         from './services/info.service';
import { AdminComponent } from './modules/admin/admin.component';
import { NavMenuComponent } from './modules/shared/navmenu/navmenu.component'
import { AppComponent }  from './app.component';

import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    InfoComponent,
    AdminComponent,
    NavMenuComponent,
  ],
  providers: [
    InfoService,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
