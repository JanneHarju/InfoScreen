import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideInDownAnimation } from '../../../common/animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  animations: [ slideInDownAnimation ],
  styleUrls: ['./popup.component.less']
})
export class PopupComponent {
  details: string;
  sending: boolean = false;
  constructor(private router: Router) {}
  ok() {
    this.closePopup();
  }
  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null }}]);
  }
}
