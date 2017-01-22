import { Component } from '@angular/core';
// AoT compilation doesn't support 'require'.
import './app.component.scss';
import '../style/app.scss';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls : ['app.component.css']
})
export class AppComponent {
  
  title = 'Info-näyttö';
  

}


