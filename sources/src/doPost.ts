// LINEでユーザからメッセージが送信されたとき
function doPost(e: any) {
    // データの読み取り
    let json = JSON.parse(e.postData.contents);

    let reply_token = json.events[0].replyToken;
    let user_id = json.events[0].source.userId;
    let user_message = json.events[0].message.text;

    let date = new Date();
    let date_str = Utilities.formatDate(date, "JST", "yyyy-MM-dd HH:mm:ss");

    // コマンド検知
    let reply_messages: any[];
    switch (user_message) {
        case "/register":
            let result = register(user_id);
            reply_messages = [result];
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

    // LINEへの応答
    replyToLine(reply_token, reply_messages);
}