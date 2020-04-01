import { Flashlight } from '@ionic-native/flashlight';
export declare class FlashlightMocks extends Flashlight {
    /**
     * Checks if the flashlight is available
     * @returns {Promise<boolean>} Returns a promise that resolves with a boolean stating if the flashlight is available.
     */
    available(): Promise<boolean>;
    /**
     * Switches the flashlight on
     * @returns {Promise<boolean>}
     */
    switchOn(): Promise<boolean>;
    /**
     * Switches the flashlight off
     * @returns {Promise<boolean>}
     */
    switchOff(): Promise<boolean>;
    /**
     * Toggles the flashlight
     * @returns {Promise<any>}
     */
    toggle(): Promise<any>;
    /**
     * Checks if the flashlight is turned on.
     * @returns {boolean}
     */
    isSwitchedOn(): boolean;
}
