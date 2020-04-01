import { Clipboard } from '@ionic-native/clipboard';
export declare class ClipboardMock extends Clipboard {
    /**
     * Copies the given text
     * @param {string} text Text that gets copied on the system clipboard
     * @returns {Promise<any>} Returns a promise after the text has been copied
     */
    copy(text: string): Promise<any>;
    /**
     * Pastes the text stored in clipboard
     * @returns {Promise<any>} Returns a promise after the text has been pasted
     */
    paste(): Promise<any>;
}
