import { Injectable } from '@angular/core';


import { Info } from '../models/info';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class InfoService {
    private infosUrl = 'http://localhost:5000/api/infos';  // URL to web api

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    constructor( private http: HttpClient) { }

    getInfos(): Promise<Info[]> {
        return this.http.get<Info[]>(this.infosUrl)
                .toPromise()
                .then(response => response )//todo kokeile poistaa tämä
                .catch(this.handleError);
    }
    getInfo(id: number): Promise<Info> {
        const url = `${this.infosUrl}/${id}`;
        return this.http.get<Info>(url)
            .toPromise()
            .then(response => response)
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
            .put<Info>(url, info, {headers: this.headers})
            .toPromise()
            .then((response) => response)
            .catch(this.handleError);
    }
    create(name: string): Promise<Info> {
        const tmpInfo = new Info();
        //tmpHero.name = name;
        return this.http
            .post<Info>(this.infosUrl, tmpInfo, {headers: this.headers})
            .toPromise()
            .then(res => res)
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
