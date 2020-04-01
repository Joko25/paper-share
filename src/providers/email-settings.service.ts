import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';
// import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ENV } from "@app/env";
import { PaperHttp } from "../services/paper-http.service";

@Injectable()
export class SettingEmailService {
    data: any;
    private paperUrl = ENV.main_api_url;
    private directusUrl = ENV.gateway_url;

    constructor(private http: PaperHttp) {
        this.data = null;
    }

    load(): Observable<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var bearer = localStorage.getItem('bearer_token');
        headers.append('Authorization', bearer);
        var options = new RequestOptions({ headers: headers });
        var update_url = this.paperUrl + 'invoice-email-setting';

        return this.http.get(update_url, options).map(this.extractData);
    }


    getContentMarketing(): Observable<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var bearer = 'EVHyVi2Fkuw8N9aWU9MKDA==';
        var index = '4';
        headers.append('token_id', bearer);
        headers.append('index', index);
        var options = new RequestOptions({ headers: headers });
        var update_url = this.directusUrl + '/directus_api/get-item-by-id';

        return this.http.get(update_url, options).map(this.extractData);
    }

    save(data): Observable<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var bearer = localStorage.getItem('bearer_token');
        headers.append('Authorization', bearer);
        var options = new RequestOptions({ headers: headers });
        var update_url = this.paperUrl + 'invoice-email-setting';

        return this.http.post(update_url, data, options).map(this.extractData);
    }

    getFeeDigPay(data): Observable<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var bearer = localStorage.getItem('bearer_token');
        headers.append('Authorization', bearer);
        var options = new RequestOptions({ headers: headers });
        var update_url = this.paperUrl + 'digital-payment/get-fee-amount';

        return this.http.post(update_url, data, options).map(this.extractData);
    }

    reset(): Observable<any> {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var bearer = localStorage.getItem('bearer_token');
        headers.append('Authorization', bearer);
        var options = new RequestOptions({ headers: headers });
        var update_url = this.paperUrl + 'invoice-email-setting/reset';

        return this.http.get(update_url, options).map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log('response from client server');
        console.debug(body);
        return body || {};
    }

}