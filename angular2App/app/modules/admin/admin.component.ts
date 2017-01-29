import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';

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
        private infoService: InfoService,
        private st: SimpleTimer,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.getInfo();
    }
    getInfo(): void {
        this.route.params
            .switchMap((params: Params) => this.infoService.getInfo(+params['id']))
            .subscribe(info => this.info = info);
    }
    save(): void {
        this.infoService.update(this.info);
    }
}