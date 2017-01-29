import { Component } from '@angular/core';
// AoT compilation doesn't support 'require'.
import './app.component.scss';
import '../style/app.scss';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styles: [ require('./app.component.scss'),require('./app.component.css') ],
})
export class AppComponent 
{
  title = 'Info-näyttö';
}


