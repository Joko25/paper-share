import { Injectable } from "@angular/core";
import {
    Http,
    XHRBackend,
    RequestOptions,
    Request,
    RequestOptionsArgs,
    Response,
    Headers
} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import { Observable } from "rxjs";
// import { UUID } from "angular2-uuid";
import { HttpHandlerService } from "../providers/http-handler-service";
import { AuthenticationService } from "../providers/auth-service";

@Injectable()
export class PaperHttp extends Http {
    listOfflineMode: any[];
    typeOptions: any = {
        0: "get",
        1: "post",
        2: "put",
        3: "delete"
    };
    listOfflineModeKey: string = "list_cache_offline";

    // NOTE from EDO: Bikin config properties untuk retry berapa kali etc
    constructor(
        backend: XHRBackend,
        options: RequestOptions,
        public httpHandler: HttpHandlerService,
        public auth: AuthenticationService
    ) {
        super(backend, options);
        this.setCache();
    }

    setCache() {
        let listCacheOffilne = localStorage.getItem(this.listOfflineModeKey);
        if (listCacheOffilne) {
            this.listOfflineMode = JSON.parse(listCacheOffilne);
        } else {
            this.listOfflineMode = [];
        }
    }

    request(
        url: string | Request,
        options?: RequestOptionsArgs
    ): Observable<Response> {
        let token = localStorage.getItem("bearer_token");
        if (typeof url === "string") {
            // meaning we have to add the token to the options, not in url
            if (!options) {
                // let's make option object
                options = { headers: new Headers() };
            }
            options.headers.set("Authorization", token);
        } else {
            // we have to add the token to the url object
            url.headers.set("Authorization", token);
        }
        return (
            super
                .request(url, options)
                .catch((err: Response, caught: Observable<any>) => {
                    console.log("Observable Caught", err);
                    if (err.status === 401) {
                        console.log("Error?", err);
                        this.httpHandler.emitter401.emit(true);
                        return Observable.throw(err);
                    }
                    if (err.status == 422) {
                        console.log("422!");
                        return Observable.of(err);
                    }
                    if (err.status > 401 && err.status < 499) {
                        console.log("----------err 401 - 499!", err);
                        return Observable.of(err);
                    }

                    return Observable.throw(err);
                })
                .finally(() => {
                    console.log("After Requests");
                })
        );
    }

    getItem(key: string) {
        let data = localStorage.getItem(key);
        let dataReturn;
        try {
            dataReturn = JSON.parse(data);
        } catch (e) {
            dataReturn = data;
        }
        return dataReturn;
    }

    setItem(key: string, data: any) {
        let dataString = JSON.stringify(data);
        localStorage.setItem(key, dataString);
    }
}
