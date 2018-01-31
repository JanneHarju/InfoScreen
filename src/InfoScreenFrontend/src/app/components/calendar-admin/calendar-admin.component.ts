import { Component, OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { Info } from '../../models/info';
import { InfoService } from '../../services/info.service';
import { SimpleTimer } from 'ng2-simple-timer';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-calendar-admin',
  templateUrl: './calendar-admin.component.html',
  styleUrls: ['./calendar-admin.component.less']
})
export class CalendarAdminComponent implements OnInit, AfterViewInit {


  info = new Info();
  
  public focus = new EventEmitter<boolean>();
  constructor(
      private infoService: InfoService,
      private st: SimpleTimer,
      private router: Router,
      private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.getInfo();
  }
  ngAfterViewInit()
  {
      this.focus.emit(true);
  }
  getInfo(): void {

      let add = 2;
      this.route.params
          .switchMap((params : ParamMap) => this.infoService.getInfo(+params['id']+add))
          .subscribe(info => this.info = info);
  }
  save(): void {
      this.infoService.update(this.info).then((info)=>
      {
          this.info = info;
          this.router.navigate([{ outlets: { popup: 'popup' }}]);
      });
  }
}
