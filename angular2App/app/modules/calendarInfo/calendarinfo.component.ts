import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Info } from '../../models/info';
import { InfoService } from '../../services/info.service';
import { routerTransition } from '../shared/router.animations';
import { Location }                 from '@angular/common';
import { SimpleTimer } from 'ng2-simple-timer';
import {trigger, state, animate, style, transition} from '@angular/core';

@Component({
    selector: 'my-calendarinfo',
    templateUrl: 'calendarinfo.component.html',
    //styles: [require('./calendarinfo.component.less')],
    styleUrls: [ './calendarinfo.component.less' ],
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
    host: {'[@routerTransition]': ''}
})
export class CalendarInfoComponent implements OnInit, OnDestroy {
    timerId: string;
    info:Info = new Info();
    notFirstTime: boolean = false;
    ngOnInit(): void 
    {
        this.st.newTimer('timer', 20);
        this.timerId = this.st.subscribe('timer', e => this.callback());

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
        let add = 2;
        let urlParts = this.router.url.split("/");
        let parameter = urlParts[urlParts.length-1];
        let id = +parameter + add;
        this.infoService.getInfo(id)
            .then(info => this.info = info);
    }
    callback() {
        if(this.notFirstTime)
        {
            this.st.delTimer('timer');
            if(this.location.isCurrentPathEqualTo('/calendarinfo/0'))
            {
                this.router.navigate(['/info', 0]);
            }
        }
        else
        {
            this.notFirstTime = true;
        }
    }
}


