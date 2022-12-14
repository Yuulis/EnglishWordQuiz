// LINEでユーザからメッセージが送信されたとき
function doPost(e: any) {
    // データの読み取り
    let json = JSON.parse(e.postData.contents);

    let reply_token = json.events[0].replyToken;
    let user_id = json.events[0].source.userId;
    let user_message = json.events[0].message.text;

    let date = new Date();
    let date_str = Utilities.formatDate(date, "JST", "yyyy-MM-dd HH:mm:ss");

    // スラッシュコマンドのみ検知
    if (user_message[0] !== "/") {
        return;
    }

    let reply_messages: any[];
    let result;

    // ユーザー未登録時
    if (isRegistered(user_id) == -1) {
        switch (user_message) {
            case "/register":
                result = register(user_id);
                reply_messages = [result];
                writeLog(date_str, user_id, "register");
                break;

            default:
                reply_messages = ["This command is not undefined."];
                writeLog(date_str, user_id, "undefined command");
                break;
        }
    }

    // ユーザー登録時
    else {
        switch (user_message) {
            case "/unregister":
                result = unregister(user_id);
                reply_messages = [result];
                writeLog(date_str, user_id, "unregister");
                break;

            case "/random":
                result = selectWords(user_id);
                reply_messages = [result];
                writeLog(date_str, user_id, "random");
                break;

            default:
                reply_messages = ["This command is not undefined."];
                writeLog(date_str, user_id, "undefined command");
                break;
        }
    }

    // LINEへの応答
    replyToLine(reply_token, reply_messages);
}