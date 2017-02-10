import { Component, OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';

import { Info } from '../../models/info';
import { InfoService } from '../../services/info.service';
import { routerTransition } from '../shared/router.animations';
import { SimpleTimer } from 'ng2-simple-timer';


@Component({
  selector: 'my-calendaradmin',
  templateUrl: 'calendaradmin.component.html',
  styles: [ require('./calendaradmin.component.less') ],
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
            .switchMap((params: Params) => this.infoService.getInfo(+params['id']+add))
            .subscribe(info => this.info = info);
    }
    save(): void {
        this.infoService.update(this.info).then(()=>
        {
            this.router.navigate([{ outlets: { popup: 'popup' }}]);
        });
    }
}