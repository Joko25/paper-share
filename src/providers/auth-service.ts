import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
// import { UUID } from "angular2-uuid";
// import { setEventAnalytics } from "../util/util";
import { FirebaseAnalytics } from "@ionic-native/firebase-analytics";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { ENV } from "@app/env";
import { CleverTap } from "@ionic-native/clevertap";
@Injectable()
export class AuthenticationService {
    authUrl = ENV.auth_url;
    paperUrl = ENV.main_api_url;
    paywallUrl = ENV.paywall_api_url;
    newGatewayUrl = ENV.new_gateway_url;
    mailUrl = ENV.mail_api_url;

    data: any;
    client_id: string = "f3d259ddd3ed8ff3843839b";
    client_secret: string = "4c7f6f8fa93d59c45502c0ae8c4a95b";
    redirectUrl: string;

    constructor(public http: Http, public firebase: FirebaseAnalytics, private clevertap: CleverTap) {
        this.data = null;
    }

    isLogged() {
        return localStorage.getItem("bearer_token") ? true : false;
    }

    saveLocalStorageUserData(data) {
        console.log("JSON.stringify(data.company)", JSON.stringify(data.company));
        console.log('USER LOGIN DATA CLEVERTAP', data);
        if (data.id && data.ttl && data.created && data.userId) {
            let token = {
                id: data.id,
                ttl: data.ttl,
                created: data.created,
                userId: data.userId
            };
            localStorage.setItem("token", JSON.stringify(token));
        }
        if (data.id) {
            localStorage.setItem("bearer_token", data.id);
        }
        if (data.user) {
            localStorage.setItem("user", JSON.stringify(data.user));
        }
        if (data.package) {
            localStorage.setItem("package", JSON.stringify(data.package));
        }
        if (data.company) {
            localStorage.setItem("company", JSON.stringify(data.company));
        }
        if (data.user_module_role) {
            localStorage.setItem(
                "user_module_role",
                JSON.stringify(data.user_module_role)
            );
        }
        if (data.language) {
            localStorage.setItem("language", JSON.stringify(data.language));
        }
        localStorage.setItem("first-login", JSON.stringify(true));

        this.clevertap.onUserLogin({
            Identity: data.user.uuid,
            Email: data.user.email,
            Name: data.user.name ? data.user.name : 'unidentified',
            Phone: data.user.phone ? data.user.phone : 'unidentified',
            lastname: data.user.lastname ? data.user.lastname : 'unidentified',
            user_module_role_setting_id: data.user.user_module_role_setting_id,
            package_code: data.package.code,
            package_id: data.package.uuid,
            package_name: data.package.package_name,
            package_type_id: data.package.package_type_id,
            company_email: data.company.company_email,
            company_id: data.user.company_id,
            is_creator: data.user.is_creator ? 'Yes' : 'No'
        });
        this.clevertap.profileSet({
            Identity: data.user.uuid,
            Email: data.user.email,
            Name: data.user.name ? data.user.name : 'unidentified',
            Phone: data.user.phone ? data.user.phone : 'unidentified',
            lastname: data.user.lastname ? data.user.lastname : 'unidentified',
            user_module_role_setting_id: data.user.user_module_role_setting_id,
            package_code: data.package.code,
            package_id: data.package.uuid,
            package_name: data.package.package_name,
            package_type_id: data.package.package_type_id,
            company_email: data.company.company_email,
            company_id: data.user.company_id,
            is_creator: data.user.is_creator ? 'Yes' : 'No'
        })
    }

    setFirstLogin(data: boolean) {
        localStorage.setItem("first-login", JSON.stringify(data));
    }



    getFirstLogin() {
        return JSON.parse(localStorage.getItem('first-login'));
    }

    getToken() {
        return JSON.parse(localStorage.getItem("token")) || {};
    }
    getbearer() {
        return localStorage.getItem("bearer_token");
    }
    getUser() {
        return JSON.parse(localStorage.getItem("user")) || {};
    }
    getPackage() {
        return JSON.parse(localStorage.getItem("package")) || {};
    }
    getOnboarding() {
        return JSON.parse(localStorage.getItem("onboarding_data")) || {};
    }
    getCompany() {
        return JSON.parse(localStorage.getItem("company")) || {};
    }
    getUserModuleRole() {
        return JSON.parse(localStorage.getItem("user_module_role")) || {};
    }
    getlanguage() {
        return JSON.parse(localStorage.getItem("language")) || {};
    }

    getuserFull() {
        let data: any = {};
        data.user = JSON.parse(localStorage.getItem("user")) || {};
        data.package = JSON.parse(localStorage.getItem("package")) || {};
        data.company = JSON.parse(localStorage.getItem("company")) || {};
        data.user_module_role =
            JSON.parse(localStorage.getItem("user_module_role")) || {};
        data.language = JSON.parse(localStorage.getItem("language")) || {};
        return data;
    }

    setUser(user) {
        let full_user = this.getuserFull();
        full_user.user = user;
        console.log("full_user", full_user);
        localStorage.setItem("user", JSON.stringify(user));
    }

    setCompany(data) {
        localStorage.setItem("company", JSON.stringify(data));
    }

    getUsers() {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var bearer = localStorage.getItem('bearer_token');
        console.log('bearer in service', bearer)
        headers.append('Authorization', bearer);


        var options = new RequestOptions({ headers: headers });

        var get_url = this.paywallUrl + 'users';

        return this.http.get(get_url, options).map(this.extractData);
    }

    check(): boolean {
        if (localStorage.getItem("bearer_token")) {
            return true;
        }
        return false;
    }

    getStatusOnboarding(company_id) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var bearer = localStorage.getItem('bearer_token');
        console.log('bearer in service', bearer)
        headers.append('Authorization', bearer);


        var options = new RequestOptions({ headers: headers });

        var get_url = this.paywallUrl + 'companies/' + company_id + '/onboarding-status';

        return this.http.get(get_url, options).map(this.extractData);
    }

    getEmailStatus(email) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        var param = {
            email: email
        };
        var options = new RequestOptions({ headers: email });

        var get_url = this.paywallUrl + 'users/check-user-by-email';

        return this.http.post(get_url, param, options).map(this.extractData);
    }

    // postLogin(user): Observable<any> {
    // 	// let data = JSON.stringify(user);
    // 	var headers = new Headers();
    // 	headers.append("Content-Type", "application/x-www-form-urlencoded");
    // 	var creds = "email=" + user.email + "&password=" + user.password;
    // 	var options = new RequestOptions({ headers: headers });
    // 	var load_url = this.paywallUrl + "users/login";
    // 	return this.http
    // 		.post(load_url, creds, options)
    // 		.map(this.extractData)
    // 		.catch(this.handleError);
    // }

    postLogin(user): Observable<any> {
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        const options = new RequestOptions({ headers: headers });
        const load_url = this.newGatewayUrl + "auth/login";
        return this.http
            .post(load_url, user, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    postLoginBy(user): Observable<any> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var bearer = localStorage.getItem("bearer_token");
        headers.append("Authorization", bearer);
        var options = new RequestOptions({ headers: headers });
        var load_url = this.paywallUrl + "login-by";
        return this.http
            .post(load_url, user, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    loadUsers(): Observable<any> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var bearer = localStorage.getItem("bearer_token");
        headers.append("Authorization", bearer);
        var options = new RequestOptions({ headers: headers });
        var load_url = this.paywallUrl + "users/load";
        return this.http
            .get(load_url, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    loadApplicationStatus(): Observable<any> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var options = new RequestOptions({ headers: headers });
        var load_url = this.paywallUrl + "application-status/status";
        return this.http
            .get(load_url, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getLoggedInUser(): Observable<any> {
        return new Observable((observer: any) => {
            let data: any = {};
            data.user = JSON.parse(localStorage.getItem("user")) || {};
            data.package = JSON.parse(localStorage.getItem("package")) || {};
            data.company = JSON.parse(localStorage.getItem("company")) || {};
            data.user_module_role =
                JSON.parse(localStorage.getItem("user_module_role")) || {};
            data.languange = JSON.parse(localStorage.getItem("language")) || {};
            // data.onboarding = JSON.parse(localStorage.getItem("onboarding_data")) || {};
            observer.next(data);
            observer.complete();
        });
    }

    registerUser(users): Observable<any> {
        var headers = new Headers();
        var options = new RequestOptions({ headers: headers });
        var load_url = this.newGatewayUrl + "auth/register";
        console.log("load_url", load_url);
        return this.http
            .post(load_url, users, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    resetPassword(email): Observable<any> {
        var headers = new Headers();
        var options = new RequestOptions({ headers: headers });
        var load_url = this.newGatewayUrl + "auth/reset";
        return this.http
            .post(load_url, email, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    update(user): Observable<any> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var bearer = localStorage.getItem("bearer_token");

        headers.append("Authorization", bearer);
        // user.company_id = JSON.parse(localStorage.getItem("user")).company_id;

        var options = new RequestOptions({ headers: headers });

        var update_url = this.paywallUrl + "users/" + user.uuid;
        console.log("http client", user);
        console.log("http client", user.uuid);
        return this.http
            .put(update_url, user, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    setPassword(newPassword: any): Observable<any> {
        console.log("reset password", newPassword);
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var bearer = localStorage.getItem("bearer_token");
        headers.append("Authorization", bearer);
        localStorage.removeItem("reset_token");
        var options = new RequestOptions({ headers: headers });
        var load_url = this.newGatewayUrl + "users/reset-password";
        return this.http
            .post(load_url, newPassword, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    postLogout(): Observable<any> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var bearer = localStorage.getItem("bearer_token");
        headers.append("Authorization", bearer);
        localStorage.removeItem("token");
        localStorage.removeItem("bearer_token");
        localStorage.removeItem("user");
        localStorage.removeItem("package");
        localStorage.removeItem("company");
        localStorage.removeItem("user_module_role");
        localStorage.removeItem("language");
        var options = new RequestOptions({ headers: headers });
        var load_url = this.paywallUrl + "users/logout";
        return this.http
            .post(load_url, {}, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    message_create(message): Observable<any> {
        console.log("tes message service 2", message);
        return message;
    }

    extractData(res: Response) {
        let body = res.json();
        console.debug(body);
        return body || {};
    }
    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || "Server error");
    }

    // getLatestVersion(): Observable<any> {
    // 	var headers = new Headers();
    // 	headers.append('Access-Control-Allow-Origin', '*');
    // 	headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    // 	headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    // 	headers.append('Accept', 'application/json');
    // 	headers.append('content-type', 'application/json');
    // 	let options = new RequestOptions({ headers: headers });

    // 	let url = "https://play.google.com/store/apps/details?id=id.paper.invoicer&hl=en";
    // 	// let url =
    // 	//   "https://play.google.com/store/apps/details?id=id.paper.beta&hl=en";
    // 	return this.http.get(url, options).map((res: Response) => {
    // 		let body = res;
    // 		return body;
    // 	});
    // }

    getUserPackage(): Observable<any> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var bearer = localStorage.getItem("bearer_token");
        headers.append("Authorization", bearer);
        var options = new RequestOptions({ headers: headers });
        var load_url = this.paywallUrl + "users/package";
        return this.http
            .get(load_url, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    validateMailgun(email: string): Observable<any> {
        var headers = new Headers();
        headers.append("Content-Type", "application/json");
        var bearer = localStorage.getItem("reset_token");
        headers.append("Authorization", bearer);
        var options = new RequestOptions({ headers: headers });
        var load_url = this.mailUrl + "validate-mail";

        let body = {
            "email": email
        };

        return this.http.post(load_url, body, options)
            .timeout(5000)
            .map(this.extractData);
    }
}
