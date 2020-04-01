import { Mixpanel, MixpanelPeople } from '@ionic-native/mixpanel';
export declare class MixpanelMock extends Mixpanel {
    /**
     *
     * @param aliasId {string}
     * @param originalId {string}
     * @returns {Promise<any>}
     */
    alias(aliasId: string, originalId: string): Promise<any>;
    /**
     *
     * @returns {Promise<any>}
     */
    distinctId(): Promise<any>;
    /**
     * @returns {Promise<any>}
     */
    flush(): Promise<any>;
    /**
     *
     * @param distinctId {string}
     * @returns {Promise<any>}
     */
    identify(distinctId: string): Promise<any>;
    /**
     *
     * @param token {string}
     * @returns {Promise<any>}
     */
    init(token: string): Promise<any>;
    /**
     *
     * @param superProperties {any}
     * @returns {Promise<any>}
     */
    registerSuperProperties(superProperties: any): Promise<any>;
    /**
     *
     * @returns {Promise<any>}
     */
    reset(): Promise<any>;
    /**
     *
     * @param eventName {string}
     * @returns {Promise<any>}
     */
    timeEvent(eventName: string): Promise<any>;
    /**
     *
     * @param eventName {string}
     * @param eventProperties {any} optional
     * @returns {Promise<any>}
     */
    track(eventName: string, eventProperties?: any): Promise<any>;
}
/**
 * @hidden
 */
export declare class MixpanelPeopleMock extends MixpanelPeople {
    /**
     *
     * @param distinctId {string}
     * @return {Promise<any>}
     */
    identify(distinctId: string): Promise<any>;
    /**
     *
     * @param peopleProperties {string}
     * @return {Promise<any>}
     */
    increment(peopleProperties: any): Promise<any>;
    /**
     *
     * @param pushId
     * @return {Promise<any>}
     */
    setPushId(pushId: string): Promise<any>;
    /**
     *
     * @param peopleProperties
     * @return {Promise<any>}
     */
    set(peopleProperties: any): Promise<any>;
    /**
     *
     * @param peopleProperties
     * @return {Promise<any>}
     */
    setOnce(peopleProperties: any): Promise<any>;
}
