import { LaunchReview } from '@ionic-native/launch-review';
export declare class LaunchReviewMock extends LaunchReview {
    /**
     * Launch store app using given app ID
     * @returns {Promise<void>}
     */
    launch(appId: string): Promise<void>;
}
