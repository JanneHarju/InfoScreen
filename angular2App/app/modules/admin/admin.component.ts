import { Component, OnInit } from '@angular/core';

import { Info } from '../../models/info';
import { InfoService } from '../../services/info.service';
import { routerTransition } from '../shared/router.animations';
import { SimpleTimer } from 'ng2-simple-timer';


@Component({
  selector: 'my-admin',
  templateUrl: 'admin.component.html',
  styles: [ require('./admin.component.less') ],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})

export class AdminComponent implements OnInit {


    info = new Info();
    
    constructor(
        private heroService: InfoService,
        private st: SimpleTimer) { }

    ngOnInit(): void {
        this.st.delTimer('5sec');
        this.heroService.getInfo(0)
            .then(info => this.info = info);
    }
    save(): void {
        this.heroService.update(this.info);
    }
}