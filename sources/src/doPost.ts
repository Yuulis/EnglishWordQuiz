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
            writeLog(date_str, user_id, "register");
            break;

        case "/unregister":
            result = unregister(user_id);
            reply_messages = [result];
            writeLog(date_str, user_id, "unregister");
            break;

        default:
            reply_messages = ["This command is not undefined."];
            writeLog(date_str, user_id, "undefined command");
            break;
    }

    // LINEへの応答
    replyToLine(reply_token, reply_messages);
}