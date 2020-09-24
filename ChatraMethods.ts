import {PositionCode} from './PositionCode';
import {Colors} from './Colors';
import {ChatraIntegrationDataValue} from "./ChatraIntegrationDataValue";
import {Locale} from "./Locale";

export interface ChatraMethods {
    /** Sends an automatic message on behalf of a random agent. Works in the same way as automatic targeted
     *  messages, but you can create your own custom logic and have more control over what and when is sent. */
    (action: 'sendAutoMessage', text: string): void

    /** Sets chat button position. */
    (action: 'setButtonPosition', positionCode: PositionCode): void

    /** Resets chat button position to the one specified in Chatra Settings. */
    (action: 'resetButtonPosition'): void

    /** Sets the size of the round chat button in px. */
    (action: 'setButtonSize', size: number): void
    // todo can i don't set size for default?

    /** Sets the width of the chat widget in px. */
    (action: 'setChatWidth', width: number): void
    // todo can i don't set width for default?

    /** Sets the height of the chat widget in px. */
    (action: 'setChatHeight', height: number): void
    // todo can i don't set height for default?

    /** Sets chat widget’s z-index value.  */
    (action: 'setZIndex', zIndex: number): void
    // todo can i don't set zIndex for default?

    /** Sets the color scheme of the widget. */
    (action: 'setColors', colors: Colors): void

    /** Resets the colors set with colors setting or setColors method. */
    (action: 'resetColors'): void

    /** Expands the chat window. Works both on desktop and mobile devices. */
    (action: 'openChat', focus?: boolean): void

    /** Expands the chat window. Doesn’t affect mobile devices. */
    (action: 'expandWidget', focus?: boolean): void

    /** Minimizes the chat window. */
    (action: 'minimizeWidget'): void

    /** Hides the widget. */
    (action: 'hide'): void

    /** Shows the widget hidden by startHidden setting or hide method. */
    (action: 'show'): void

    /** Sends a page view to the Chatra dashboard. If your website or web app loads pages dynamically and updates
     *  the document’s URL without requiring a full page load, use this method to track these views and see them
     *  in the Chatra dashboard. */
    (action: 'pageView'): void

    /** Sets visitor’s name, email, phone, notes and other arbitrary info which will show in the info panel
     *  in Chatra dashboard on the right. Completely overwrites previously sent data. */
    (action: 'setIntegrationData', data: Record<string, ChatraIntegrationDataValue>): void

    /** Updates visitor’s info in Chatra dashboard. null is used to remove properties */
    (action: 'updateIntegrationData', data: Record<string, ChatraIntegrationDataValue | null>): void

    /** Allows to change any number of the default locale strings. */
    (action: 'setLocale', localeModifier: Locale): void

    /** Sets agent group ID. Chats started with specified group ID will be assigned to this group. */
    (action: 'setGroupId', groupId: string): void

    /** Restarts Chatra. */
    (action: 'restart'): void

    /** Removes Chatra completely from the page.  */
    (action: 'kill'): void
}
