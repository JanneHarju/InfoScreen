import { Component, OnInit, OnDestroy } from '@angular/core';
import { Info } from '../../models/info';
import { InfoService } from '../../services/info.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { trigger, state, animate, style, transition } from '@angular/animations';
import { SimpleTimer } from 'ng2-simple-timer';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.less'],
  animations: [
    trigger('routerTransition', [
    state('void', style({ 
            backgroundColor:'black', 
            position:'absolute',
             width:'100%'
        }) ),
    state('*', style({
            backgroundColor:'black', 
            position:'absolute', 
            width:'100%'
        }) ),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
  ])],
host: {'[@routerTransition]': ''},
})
export class InfoComponent implements OnInit, OnDestroy {
  //viewList: boolean = false;
  timerId: string;
  info = new Info();
  time = new Date();
  notFirstTime: boolean = false;
  ngOnInit(): void 
  {
      this.st.newTimer('timer', 20);
      this.timerId = this.st.subscribe('timer', () => this.callback());

      this.getInfo();
  } 

  ngOnDestroy(): void
  {
      this.st.delTimer('timer');
  }

  constructor(
      private infoService: InfoService,
      private router: Router,
      private st: SimpleTimer,
      private location: Location,
      private route: ActivatedRoute) { }

  getInfo(): void {
      let urlParts = this.router.url.split("/");
      let parameter = urlParts[urlParts.length-1];
      this.infoService.getInfo(+parameter)
          .then(info => this.info = info);
      //this.viewList = this.info.label_right_down_2 == "";
  }
  callback() {
      if(this.notFirstTime)
      {
          this.st.delTimer('timer');
          if(this.location.isCurrentPathEqualTo('/info/0'))
          {
              this.router.navigate(['/info', 1]);
          }
          else if(this.location.isCurrentPathEqualTo('/info/1'))
          {
              this.router.navigate(['/calendarinfo', 0]);
          }
      }
      else
      {
          this.notFirstTime = true;
      }
  }
}
