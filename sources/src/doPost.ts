function doPost(e: any) {
    let json = JSON.parse(e.postData.contents);

    let reply_token = json.events[0].replyToken;
    let user_id = json.events[0].source.userId;
    let user_message = json.events[0].message.text;

    let date = new Date();
    let date_str = Utilities.formatDate(date, "JST", "yyyy/MM/dd HH:mm:ss");

    let reply_messages: any[];
    switch (user_message) {
        case "/register":
            register(user_id);
            reply_messages = ["You are registered."];
            writeLog(date, user_id, "register");
            break;

        case "/getDate":
            reply_messages = [date_str];
            writeLog(date, user_id, "getDate");
            break;

        default:
            reply_messages = [user_message];
            writeLog(date, user_id, "reply");
            break;
    }

    replyToLine(reply_token, reply_messages);
}