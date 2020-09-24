import {ChatraSetup} from './ChatraSetup';
import {ChatraMethods} from './ChatraMethods';
import {ChatraIntegrationDataValue} from './ChatraIntegrationDataValue';

declare interface Window {
    /** Settings. */
    ChatraSetup?: ChatraSetup;

    /** Methods are used to dinamically change the behavior of the chat widget. */
    Chatra?: ChatraMethods;

    /** Passing arbitrary user info to Chatra dashboard. */
    ChatraIntegration?: Record<string, ChatraIntegrationDataValue>;
}
