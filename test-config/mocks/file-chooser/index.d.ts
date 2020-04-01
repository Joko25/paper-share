import { FileChooser } from '@ionic-native/file-chooser';
export declare class FileChooserMock extends FileChooser {
    /**
     * Open a file
     * @returns {Promise<string>}
     */
    open(): Promise<string>;
}
