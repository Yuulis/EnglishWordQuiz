function replyToLine(data: any) {
    const LINE_ACCESS_TOKEN = PropertiesService.getScriptProperties().getProperty("LINE_ACCESS_TOKEN");

    const url = "https://api.line.me/v2/bot/message/reply";
    const headers = {
        "Content-Type": "application/json; charset=UTF-8",
        "Authorization": "Bearer " + LINE_ACCESS_TOKEN,
    };

    const payload = {
        "replyToken": data.events[0].replyToken,
        "messages": [
            {
                "type": "text",
                "text": data.events[0].message.text,
            },
        ],
    };

    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
        "method": "post",
        "headers": headers,
        "payload": JSON.stringify(payload),
    };

    return UrlFetchApp.fetch(url, options);
}
