import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { FirebaseAnalytics } from "@ionic-native/firebase-analytics";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { ENV } from "@app/env";
import { PaperHttp } from "./paper-http.service";

@Injectable()
export class zendeskService {
    data: any;
    paperUrl = ENV.main_api_url;
    paperUrl_images = ENV.assets_api_url;
    help_center = ENV.zendesk_url;

    constructor(
        public http: PaperHttp,
        public original_http: Http,
        public firebase: FirebaseAnalytics
    ) {
        this.data = null;
    }

    getFAQ(): Observable<any> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var bearer = localStorage.getItem("bearer_token");

        headers.append("Authorization", bearer);

        var options = new RequestOptions({
            headers: headers
        });
        var load_url = this.help_center + "/api/v2/help_center/id/categories.json";
        return this.http.get(load_url, options).map(this.extractData);
    }

    getSection(id): Observable<any> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var bearer = localStorage.getItem("bearer_token");

        headers.append("Authorization", bearer);

        var options = new RequestOptions({
            headers: headers
        });
        var load_url = this.help_center + "/api/v2/help_center/id/categories/" + id + "/sections.json";
        return this.http.get(load_url, options).map(this.extractData);
    }

    getArticle(section_id): Observable<any> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var bearer = localStorage.getItem("bearer_token");

        headers.append("Authorization", bearer);

        var options = new RequestOptions({
            headers: headers
        });
        var load_url = this.help_center + "/api/v2/help_center/id/sections/" + section_id + "/articles.json";
        return this.http.get(load_url, options).map(this.extractData);
    }

    getAllArticle(): Observable<any> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var bearer = localStorage.getItem("bearer_token");

        headers.append("Authorization", bearer);

        var options = new RequestOptions({
            headers: headers
        });
        var load_url = this.help_center + "/api/v2/help_center/categories/360000262471/articles.json?page=1&per_page=1000";
        return this.http.get(load_url, options).map(this.extractData);
    }
    getAllArticleGuide(): Observable<any> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var bearer = localStorage.getItem("bearer_token");

        headers.append("Authorization", bearer);

        var options = new RequestOptions({
            headers: headers
        });
        var load_url = this.help_center + "/api/v2/help_center/categories/360002607252/articles.json?page=1&per_page=1000";
        return this.http.get(load_url, options).map(this.extractData);
    }

    searchAarticle(value): Observable<any> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var bearer = localStorage.getItem("bearer_token");

        headers.append("Authorization", bearer);

        var options = new RequestOptions({
            headers: headers
        });
        var load_url = this.help_center + "/api/v2/help_center/articles/search.json?query=" + value + "&category=360000262471&page=1&per_page=1000";
        return this.http.get(load_url, options).map(this.extractData);
    }

    searchAarticleGuide(value): Observable<any> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var bearer = localStorage.getItem("bearer_token");

        headers.append("Authorization", bearer);

        var options = new RequestOptions({
            headers: headers
        });
        var load_url = this.help_center + "/api/v2/help_center/articles/search.json?query=" + value + "&category=360002607252&page=1&per_page=1000";
        return this.http.get(load_url, options).map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log("response from client server");
        console.debug(body);
        return body || {};
    }
}
