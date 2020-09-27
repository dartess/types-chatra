import {Language} from './Language';

type LocaleItem = string | {
    [language in Language]?: string;
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
        bot_startOnline_email?: LocaleItem;
        bot_startOnline_required?: LocaleItem;
        bot_startOffline?: LocaleItem;
        bot_startOffline_email?: LocaleItem;
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
        messagesCount?: LocaleItem;
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
        joined?: LocaleItem;
        left?: LocaleItem;
        agentsOffline?: LocaleItem;
        ratedChat?: LocaleItem;
    };
    agent?: LocaleItem;
    typing?: LocaleItem;
    areTyping?: LocaleItem;
    minimize?: LocaleItem;
    date?: {
        month?: {
            full?: LocaleItem;
            short?: LocaleItem;
        };
        am?: LocaleItem; // todo what else could it be?
        moment?: LocaleItem;
        minute?: LocaleItem;
        hour?: LocaleItem;
        day?: LocaleItem;
        today?: LocaleItem;
        yesterday?: LocaleItem;
        format?: {
            date?: LocaleItem;
            dateWithYear?: LocaleItem;
            when?: LocaleItem;
            whenWithYear?: LocaleItem;
            time?: LocaleItem;
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
    maximumFileSize?: LocaleItem;
    comment?: LocaleItem;
    rateConversation?: LocaleItem;
    rate?: LocaleItem;
    update?: LocaleItem;
    optional?: LocaleItem;
    whoToChatWith?: LocaleItem;
    notSure?: LocaleItem;
    restart?: LocaleItem;
}
