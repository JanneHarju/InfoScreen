import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { Location, LocationStrategy } from '@angular/common';
import 'rxjs/add/operator/toPromise';

import { Info } from '../models/info';

@Injectable()
export class InfoService {
    private infosUrl = 'api/infos';  // URL to web api

    private headers = new Headers({'Content-Type': 'application/json'});
    constructor( private http: Http) { }

    getInfo(): Promise<Info> {
        return this.http.get(this.infosUrl)
                .toPromise()
                .then(response => response.json() as Info)
                .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        //console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    /*getHero(id: number): Promise<Info> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Info)
            .catch(this.handleError);
    }*/

    update(info: Info): Promise<Info> {
        const url = `${this.infosUrl}/${info.id}`;
        return this.http
            .put(url, info, {headers: this.headers})
            .toPromise()
            .then(() => info)
            .catch(this.handleError);
    }
    create(name: string): Promise<Info> {
        const tmpInfo = new Info();
        //tmpHero.name = name;
        return this.http
            .post(this.infosUrl, tmpInfo, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    delete(id: number): Promise<void> {
        const url = `${this.infosUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

}