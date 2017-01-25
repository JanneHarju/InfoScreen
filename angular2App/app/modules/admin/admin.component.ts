import { Component, OnInit } from '@angular/core';

import { Info } from '../../models/info';
import { InfoService } from '../../services/info.service';


@Component({
  selector: 'my-admin',
  templateUrl: 'admin.component.html',
  //styleUrls: [ 'admin.component.less' ],
})

export class AdminComponent implements OnInit {

    info: Info;
    constructor(private heroService: InfoService) { }

    ngOnInit(): void {
        this.heroService.getInfo()
            .then(info => this.info = info);
    }
    save(): void {
        this.heroService.update(this.info);
    }
}