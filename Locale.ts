import {Language} from './Language';

type LocaleItem = {
    [language in Language]?: string;
}

// todo try typing values with placeholders for TS4.1; also monts and another strong types

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
        welcome?: 'welcome'; // todo wtf
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
        am?: LocaleItem;
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
        waiting?: '{{$connecting}}'; // todo wtf
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
    _chatra?: { // todo check can i change it?
        logo?: 'Chatra';
        phrase?: LocaleItem;
        chatra?: LocaleItem;
    };
}
