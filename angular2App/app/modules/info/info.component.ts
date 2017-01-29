import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Info } from '../../models/info';
import { InfoService } from '../../services/info.service';
import { routerTransition } from '../shared/router.animations';
import { Location }                 from '@angular/common';
import { SimpleTimer } from 'ng2-simple-timer';

@Component({
    selector: 'my-info',
    templateUrl: 'info.component.html',
    styles: [ require('./info.component.less') ],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class InfoComponent implements OnInit, OnDestroy {
    timerId: string;
    info = new Info();
    notFirstTime: boolean = false;
    ngOnInit(): void 
    {
        this.st.newTimer('5sec', 10);
        this.timerId = this.st.subscribe('5sec', e => this.callback());

        this.getInfo();
    } 

    ngOnDestroy(): void
    {
        this.st.delTimer('5sec');
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
    }
    callback() {
        if(this.notFirstTime)
        {
            this.st.delTimer('5sec');
            if(this.location.isCurrentPathEqualTo('/info/1'))
            {
                this.router.navigate(['/info', 0]);
            }
            else
            {
                this.router.navigate(['/info', 1]);
            }
        }
        else
        {
            this.notFirstTime = true;
        }
    }
}


