import { FilePath } from '@ionic-native/file-path';
export declare class FilePathMock extends FilePath {
    /**
     * Resolve native path for given content URL/path.
     * @param {String} path  Content URL/path.
     * @returns {Promise<string>}
     */
    resolveNativePath(path: string): Promise<string>;
}
