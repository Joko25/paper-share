import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links';
export interface DynamicLinksOptions {
    title: string;
    message: string;
    deepLink?: string;
    callToActionText?: string;
}
export declare class FirebaseDynamicLinksMocks extends FirebaseDynamicLinks {
    /**
     * Registers callback that is triggered on each dynamic link click.
     * @return {Promise<any>} Returns a promise
     */
    onDynamicLink(): Promise<any>;
    /**
     * Display invitation dialog.
     * @param options {DynamicLinksOptions} Some param to configure something
     * @return {Promise<any>} Returns a promise
     */
    sendInvitation(options: DynamicLinksOptions): Promise<any>;
}
