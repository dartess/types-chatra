// @ts-nocheck

import {Language} from '../Language';

type LocaleItem<T extends string = string> = T | {
    [language in Language]?: T;
}

/**
 * https://chat.chatra.io/locale.json
 */
export interface Locale {
    customStrings?: {
        welcome?: LocaleItem;
        chatWithUs?: LocaleItem;
        leaveUsAMessage?: LocaleItem;
        mobile_chatWithUs?: LocaleItem;
        mobile_leaveUsAMessage?: LocaleItem;
        offlineNote?: LocaleItem;
        bot_thanksForMessage?: LocaleItem;
        bot_startOnline?: LocaleItem;
        bot_startOnline_email?: LocaleItem<`${string}{{#email}}${string}`>;
        bot_startOnline_required?: LocaleItem;
        bot_startOffline?: LocaleItem;
        bot_startOffline_email?: LocaleItem<`${string}{{#email}}${string}`>;
        bot_startOffline_required?: LocaleItem;
        bot_beforeForm?: LocaleItem;
        bot_afterForm?: LocaleItem;
        bot_afterForm_email?: LocaleItem;
        bot_details?: LocaleItem;
        bot_checkbox?: LocaleItem;
        bot_marketingConsent?: LocaleItem;
        scriptEndText?: LocaleItem
    };
    online?: LocaleItem;
    loading?: LocaleItem;
    chat?: {
        empty?: LocaleItem;
        input?: {
            placeholder?: LocaleItem;
            oneMore?: LocaleItem;
            notIntroduced?: LocaleItem;
            reply?: LocaleItem;
        };
        send?: LocaleItem;
        messagesCount?: LocaleItem<`${string}{{#count}}${string}{{plural:#count,${string}}}`>;
        noMessages?: LocaleItem;
        newMessage?: LocaleItem;
        retrievingHistory?: LocaleItem;
        more?: LocaleItem;
        loading?: LocaleItem;
        introduce?: LocaleItem;
        rate?: LocaleItem;
        insertEmoji?: LocaleItem;
    };
    name?: LocaleItem;
    yourName?: LocaleItem;
    email?: LocaleItem;
    phone?: LocaleItem;
    message?: LocaleItem;
    submit?: LocaleItem;
    saved?: LocaleItem;
    change?: LocaleItem;
    cancel?: LocaleItem;
    messageTypes?: {
        joinedFirst?: LocaleItem;
        joined?: LocaleItem<`${string}{{#username}}${string}`>;
        left?: LocaleItem<`${string}{{#username}}${string}`>;
        agentsOffline?: LocaleItem;
        ratedChat?: LocaleItem;
    };
    agent?: LocaleItem;
    typing?: LocaleItem;
    areTyping?: LocaleItem;
    minimize?: LocaleItem;
    date?: {
        month?: {
            full?: LocaleItem<`${string}_${string}_${string}_${string}_${string}_${string}_${string}_${string}_${string}_${string}_${string}_${string}`>;
            short?: LocaleItem<`${string}_${string}_${string}_${string}_${string}_${string}_${string}_${string}_${string}_${string}_${string}_${string}`>;
        };
        am?: LocaleItem<'AM_PM'>;
        moment?: LocaleItem;
        minute?: LocaleItem<`${string}{{#count}}${string}{{plural:#count,${string}}}`>;
        hour?: LocaleItem<`${string}{{#count}}${string}{{plural:#count,${string}}}`>;
        day?: LocaleItem<`${string}{{#count}}${string}{{plural:#count,${string}}}`>;
        today?: LocaleItem;
        yesterday?: LocaleItem;
        format?: {
            date?: LocaleItem<`${string}MMMM${string}D${string}` | `${string}D${string}MMMM${string}`>;
            dateWithYear?: LocaleItem<`${string}D${string}MMMM${string}YYYY${string}` | `${string}MMMM${string}D${string}YYYY${string}` | `${string}YYYY${string}MMMM${string}D${string}` | `${string}YYYY${string}D${string}MMMM${string}`>;
            when?: LocaleItem<`${string}MMM${string}D${string}` | `${string}D${string}MMM${string}`>;
            whenWithYear?: LocaleItem<`${string}D${string}MMM${string}YYYY${string}` | `${string}MMM${string}D${string}YYYY${string}` | `${string}YYYY${string}MMM${string}D${string}` | `${string}YYYY${string}D${string}MMM${string}`>;
            time?: LocaleItem<`${string}HH${string}mm${string}` | `${string}h${string}mm${string}A${string}` | `${string}A${string}h${string}mm${string}`>;
        };
    };
    status?: {
        connecting?: LocaleItem;
        failed?: LocaleItem;
        offline?: LocaleItem;
        retry?: LocaleItem;
    };
    smile?: {
        sorry?: string;
    };
    error?: {
        weird?: LocaleItem;
        incorrectEmail?: LocaleItem;
        emptyEmail?: LocaleItem;
        emptyMessage?: LocaleItem;
        denied?: LocaleItem;
        formNotDone?: LocaleItem;
    };
    and?: LocaleItem;
    close?: LocaleItem;
    requiredField?: LocaleItem;
    messageSent?: LocaleItem;
    active?: LocaleItem;
    activeShort?: LocaleItem;
    activeLong?: LocaleItem;
    sending?: LocaleItem;
    sent?: LocaleItem;
    unsent?: LocaleItem;
    notSeen?: LocaleItem;
    seen?: LocaleItem;
    units?: {
        b?: LocaleItem;
        kb?: LocaleItem;
        mb?: LocaleItem;
        gb?: LocaleItem;
    };
    dropToUpload?: LocaleItem;
    uploadFile?: LocaleItem;
    uploadFailed?: LocaleItem;
    maximumFileSize?: LocaleItem<`${string}{{#size}}${string}`>;
    comment?: LocaleItem;
    rateConversation?: LocaleItem;
    rate?: LocaleItem;
    update?: LocaleItem;
    optional?: LocaleItem;
    whoToChatWith?: LocaleItem;
    notSure?: LocaleItem;
    restart?: LocaleItem;
}
