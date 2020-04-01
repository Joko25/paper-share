import { Httpd } from '@ionic-native/httpd';
import { Observable } from 'rxjs/Observable';
export interface HttpdOptions {
    /**
     * The public root directory for your web server. This path is relative to your app's www directory.
     * Default is current directory.
     */
    www_root?: string;
    /**
     * The port number to use.
     * Default is 8888
     */
    port?: number;
    /**
     * Setting this option to false will allow remote access to your web server (over any IP).
     * Default is false.
     */
    localhost_only?: boolean;
}
export declare class HttpdMock extends Httpd {
    /**
     * Starts a web server.
     * @param options {HttpdOptions}
     * @returns {Observable<string>} Returns an Observable. Subscribe to receive the URL for your web server (if succeeded). Unsubscribe to stop the server.
     */
    startServer(options?: HttpdOptions): Observable<string>;
    /**
     * Gets the URL of the running server
     * @returns {Promise<string>} Returns a promise that resolves with the URL of the web server.
     */
    getUrl(): Promise<string>;
    /**
     * Get the local path of the running webserver
     * @returns {Promise<string>} Returns a promise that resolves with the local path of the web server.
      */
    getLocalPath(): Promise<string>;
}
