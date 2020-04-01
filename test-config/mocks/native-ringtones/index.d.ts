import { NativeRingtones } from '@ionic-native/native-ringtones';
export declare class NativeRingtonesMock extends NativeRingtones {
    /**
     * Get the ringtone list of the device
     * @return {Promise<any>} Returns a promise that resolves when ringtones found successfully
     */
    getRingtone(): Promise<any>;
    /**
     * This function starts playing the ringtone
     * @param {string} ringtoneUri The path to the ringtone file
     * @return {Promise<any>} Returns a promise
     */
    playRingtone(ringtoneUri: string): Promise<any>;
    /**
     * This function stops playing the ringtone
     * @param {string} ringtoneUri The path to the ringtone file
     * @return {Promise<any>} Returns a promise
     */
    stopRingtone(ringtoneUri: string): Promise<any>;
}
