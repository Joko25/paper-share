import { NavigationBar } from '@ionic-native/navigation-bar';
export declare class NavigationBarMock extends NavigationBar {
    /**
     * hide automatically (or not) the navigation bar.
     * @param autohide {boolean}
     * @return {Promise<any>}
     */
    setUp(autohide?: boolean): Promise<any>;
    /**
     * Hide the navigation bar.
     * @return {Promise<any>}
     */
    hideNavigationBar(): Promise<any>;
}
