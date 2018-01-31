import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Info-näyttö';
  constructor() {
    document.body.style.overflow = 'hidden';
    document.body.style.backgroundColor = 'black';
  }
}
