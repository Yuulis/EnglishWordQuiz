function doPost(e: any) {
    let json = JSON.parse(e.postData.contents);

    let reply_token = json.events[0].replyToken;
    let user_id = json.events[0].source.userId;
    let user_message = json.events[0].message.text;

    let reply_messages: any[];
    switch (user_message) {
        case "getUserId":
            reply_messages = [user_id];
            break;

        default:
            reply_messages = [user_message];
            break;
    }

    replyToLine(reply_token, reply_messages);
}