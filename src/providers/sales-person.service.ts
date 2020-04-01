import { Injectable } from "@angular/core";
import { Headers, RequestOptions, Response } from "@angular/http";
import { FirebaseAnalytics } from "@ionic-native/firebase-analytics";
import { Observable } from "rxjs/Observable";
// import "rxjs/add/operator/map";
import { ENV } from "@app/env";
import { PaperHttp } from "../services/paper-http.service";
import { setEventAnalytics } from "../util/util";

@Injectable()
export class SalesPersonService {
    data: any;
    private paperUrl = ENV.main_api_url;

    constructor(private http: PaperHttp, public firebase: FirebaseAnalytics) {
        this.data = null;
    }

    load(): Observable<any> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var bearer = localStorage.getItem("bearer_token");

        headers.append("Authorization", bearer);

        var options = new RequestOptions({ headers: headers });
        var load_url = this.paperUrl + "salespersons";
        return this.http.get(load_url, options).map(this.extractData);
    }

    get_user(): Observable<any> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var bearer = localStorage.getItem("bearer_token");

        headers.append("Authorization", bearer);

        var options = new RequestOptions({ headers: headers });
        var load_url = this.paperUrl + "users";
        return this.http.get(load_url, options).map(this.extractData);
    }

    create(sp): Observable<any> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var bearer = localStorage.getItem("bearer_token");

        headers.append("Authorization", bearer);

        var options = new RequestOptions({ headers: headers });

        var create_url = this.paperUrl + "salespersons";
        setEventAnalytics("create_sales_person", this.firebase, sp);

        return this.http.post(create_url, sp, options).map(this.extractData);
    }
    update(sp): Observable<any> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var bearer = localStorage.getItem("bearer_token");

        headers.append("Authorization", bearer);

        var options = new RequestOptions({ headers: headers });

        var update_url = this.paperUrl + "salespersons/" + sp.uuid;
        console.log("http client", sp);
        console.log("http client", sp.uuid);
        setEventAnalytics("update_sales_person", this.firebase, sp);
        return this.http.put(update_url, sp, options).map(this.extractData);
    }

    delete(sp): Observable<any> {
        console.log("service tes");
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var bearer = localStorage.getItem("bearer_token");
        setEventAnalytics("delete_sales_person", this.firebase, sp);

        headers.append("Authorization", bearer);

        var options = new RequestOptions({ headers: headers });

        var delete_url = this.paperUrl + "salespersons/" + sp.uuid;
        console.log("deleted", delete_url);
        return this.http.delete(delete_url, options).map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log("response from client server");
        console.debug(body);
        return body || {};
    }
}
