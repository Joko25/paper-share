import { EventEmitter, Injectable } from "@angular/core";
import { Socket } from "ng-socket-io";
import { Observable } from "rxjs";
import * as socketIo from 'socket.io-client';
import { ENV } from '@app/env';
@Injectable()
export class SocketService {
    url: string = ENV.gateway_url;
    paywallUrl = ENV.paywall_api_url;
    emitterNotifcation$: any = new EventEmitter();
    subscribersCounter: number = 0;
    isSetRoom: boolean = false;
    public socket_io;


    constructor(
        public socket: Socket,

    ) {
        // this.url = 'https://staging.paper.id:8080';
        this.socket_io = socketIo(this.url);

        // console.log("socket url", this.socket_io);
    }

    // trying to connect based on https://medium.com/dailyjs/real-time-apps-with-typescript-integrating-web-sockets-node-angular-e2b57cbd1ec1
    // public initSocket(): void {
    //   this.socket_io = socketIo(this.url);
    // }

    getStatus() {
        return Observable.create((observer: any) => {
            // this.subscribersCounter++;
            // this.socket.on('status', (data: any) => {
            //     console.log("socket data status", data);
            //     observer.next(true);
            // });

            this.socket_io.on('status', (data) => {
                console.log("socket data status", data);
                observer.next(true);
            });

            //   return () => {
            //     console.log('this.subscribersCounter',this.subscribersCounter);
            //       if (this.subscribersCounter === 1){
            //         this.socket.removeListener('status');
            //       }
            //  };
        }).share();
    }
}
