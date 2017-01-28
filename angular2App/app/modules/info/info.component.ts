import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Info } from '../../models/info';
import { InfoService } from '../../services/info.service';
import { routerTransition } from '../shared/router.animations';
import { Location }                 from '@angular/common';
import {SimpleTimer} from 'ng2-simple-timer';

@Component({
    selector: 'my-info',
    templateUrl: 'info.component.html',
    styles: [ require('./info.component.less') ],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class InfoComponent implements OnInit {
    timerId: string;
    info = new Info();
    notFirstTime: boolean = false;
    ngOnInit(): void {
        this.getInfo();
            // lazy mode 

        this.st.newTimer('5sec', 5);
        this.timerId = this.st.subscribe('5sec', e => this.callback());
    } 

    constructor(
        private infoService: InfoService,
        private router: Router,
        private st: SimpleTimer,
        private location: Location) { }
    getInfo(): void {
        this.infoService.getInfo().then(info => this.info = info);
    }
    callback() {
        if(this.notFirstTime)
        {
            this.st.delTimer('5sec');
            if(this.location.isCurrentPathEqualTo("/info"))
            {
                this.router.navigate(["/info2"])
            }
            else
            {
                this.router.navigate(["/info"])
            }
        }
        else{
            this.notFirstTime = true;
        }
    }
    
}


