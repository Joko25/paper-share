import { PinCheck } from '@ionic-native/pin-check';
export declare class PinCheckMock extends PinCheck {
    /**
     *  check whether pin/keyguard or passcode is setup
     * @returns {Promise<boolean>}
     */
    isPinSetup(): Promise<boolean>;
}
