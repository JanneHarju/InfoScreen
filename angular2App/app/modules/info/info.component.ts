import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Info } from '../../models/info';
import { InfoService } from '../../services/info.service';

@Component({
    selector: 'my-info',
    templateUrl: 'info.component.html',
    //styleUrls: ['info.component.less']
})
export class InfoComponent implements OnInit {

    info: Info;
    ngOnInit(): void {
        this.getInfo();
    } 

    constructor(
        private infoService: InfoService,
        private router: Router) { }
    getInfo(): void {
        this.infoService.getInfo().then(info => this.info = info);
    }
}


