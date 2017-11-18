import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';


@Injectable()

export class AvionesService {

    private API_ENDPOINT = 'http://localhost:8010';
    constructor(private http: Http) { }
    getAviones() {
        //   return this.aviones;
        return this.http.get(this.API_ENDPOINT + '/aviones')
            .do(this.logResponse)
            .map(this.extractDate)
            .catch(this.catchError);
    }
    private catchError(error: Response | any) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error.');
    }
    private logResponse(res: Response) {
        console.log(res);
    }
    private extractDate(res: Response) {
        return res.json();
    }
    guardarUsuario(usuario) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.API_ENDPOINT + '/sms', usuario, { headers: headers })
            .do(this.logResponse)
            .map(this.extractDate)
            .catch(this.catchError);
    }

}
