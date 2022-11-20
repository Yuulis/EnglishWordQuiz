// LINEへの送信
function replyToLine(reply_token: any, reply_messages: any) {
    const LINE_ACCESS_TOKEN = PropertiesService.getScriptProperties().getProperty("LINE_ACCESS_TOKEN");

    let url = "https://api.line.me/v2/bot/message/reply";
    let headers = {
        "Content-Type": "application/json; charset=UTF-8",
        "Authorization": "Bearer " + LINE_ACCESS_TOKEN,
    };

    let payload = {
        "replyToken": reply_token,
        "messages": [
            {
                "type": "text",
                "text": "" + reply_messages[0]
            },
        ],
    };

    let options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
        "method": "post",
        "headers": headers,
        "payload": JSON.stringify(payload),
    };

    // 送信
    return UrlFetchApp.fetch(url, options);
}
