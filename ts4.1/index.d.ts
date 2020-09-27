import {ChatraSetup} from '../ChatraSetup';
import {ChatraMethods} from '../ChatraMethods';
import {ChatraIntegrationDataValue} from '../ChatraIntegrationDataValue';
import {Locale} from './Locale';

declare global {
    interface Window {
        /** Settings. */
        ChatraSetup?: ChatraSetup<Locale>;

        /** Methods are used to dinamically change the behavior of the chat widget. */
        Chatra?: ChatraMethods<Locale>;

        /** Passing arbitrary user info to Chatra dashboard. */
        ChatraIntegration?: Record<string, ChatraIntegrationDataValue>;
    }
}

