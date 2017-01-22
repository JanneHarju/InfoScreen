import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
//import { Location, LocationStrategy } from '@angular/common';
import 'rxjs/add/operator/toPromise';

import { Info } from '../models/info';

@Injectable()
export class InfoService {
    private heroesUrl = 'api/infos';  // URL to web api

    private headers = new Headers({'Content-Type': 'application/json'});
    constructor( private http: Http) { }

    getInfo(): Promise<Info> {
        return this.http.get(this.heroesUrl)
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

    update(hero: Info): Promise<Info> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, hero, {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }
    create(name: string): Promise<Info> {
        const tmpHero = new Info();
        //tmpHero.name = name;
        return this.http
            .post(this.heroesUrl, tmpHero, {headers: this.headers})
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }
    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

}