import {PositionCode} from './PositionCode';
import {Language} from './Language';
import {Locale} from './Locale';
import {Colors} from './Colors';

export interface ChatraSetup {
    /** Chat button style. Overrides the style set in widget settings. */
    buttonStyle?: 'tab' | 'round';

    /** Chat button position. Overrides the position set in widget settings. */
    buttonPosition?: PositionCode;

    /** Round chat button size in px, default is 60. Does not affect the “tab” button. */
    buttonSize?: number;

    /** Chat widget width in px, default is 340. */
    chatWidth?: number;

    /** Chat widget height in px, default is 480. */
    chatHeight?: number;

    /** Chat widget’s z-index value, default is 9999. */
    zIndex?: number;

    /** Defines the color scheme of the widget. */
    colors?: Colors;

    /** If set to true the widget starts hidden. */
    startHidden?: boolean;

    /** If set to true the widget will show up only on mobile devices. */
    mobileOnly?: boolean;
    // todo chain with disabledOnMobile?

    /** If set to true the widget won’t show up on mobile devices. */
    disabledOnMobile?: boolean;

    /** Widget language. */
    language?: Language;
    // todo check set unsupported locale (expand Locale?)

    /** Allows to change any number of the default locale strings.
     *  Change the ones you don’t like or all of them to translate the widget to an unsupported language. */
    locale?: Locale;

    /** Chatra display mode (default widget or Chatra is embedded into the block specified in injectTo). */
    mode?: 'widget' | 'frame';
    // todo chain 'frame' with injectTo?

    /** Specifies the element Chatra will be embedded into when launched in frame mode */
    injectTo?: string | HTMLElement | HTMLCollectionOf<HTMLElement> | NodeListOf<HTMLElement>;
    // todo chain 'frame' with injectTo?
    // todo how it work with HTMLCollectionOf<Element> or NodeListOf<Element>?
    // todo jQuery collections?

    /** Unique secret (not available for other users) string. Binds the chat to a signed in user. */
    clientId?: string;

    /** Agent group ID. Chats started on the page with specified group ID will be assigned to this group. */
    groupId?: string;

    /** This setting allows you to set a specific Google Analytics tracker name to send Chatra events to.
     *  There’s no need to set this unless you have several GA trackers in use on the same page.*/
    gaTrackerName?: string;

    /** This setting allows you to set a specific Google Analytics tracking ID to send Chatra events to.
     *  There’s no need to set this unless you have several GA trackers in use on the same page. */
    gaTrackingId?: string;

    /** Set this option to true to prevent Chatra from sending events to Google Analytics. */
    disableGaTracking?: boolean;

    /** This setting allows you to set a specific Yandex Metrika counter ID to send Chatra events to.
     *  There’s no need to set this unless you have several Metrika counters in use on the same page. */
    yaCounterId?: string;

    /** Set this option to true to prevent Chatra from sending events to Yandex Metrika. */
    disableYaTracking?: boolean;

    /** A callback function that is called every time one of an analytic events happens. */
    onAnalyticEvent?: Function;
    // todo more detail

    /** If set to true, the widget starts loading only after all other page resources have completed loading. */
    deferredLoading?: boolean;

    /** When a visitor opens a chat window on mobile devices, #chatraChatExpanded gets added to the page address.
     *  It allows the visitor to close the chat window using the “back” button, but in rare cases,
     *  it may conflict with some single-page applications. */
    disableChatOpenHash?: boolean;
}
