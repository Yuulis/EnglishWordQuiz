// ログの記録
function writeLog(date: any = "", user_id: any = "", command: any = "", message: any = "") {
    const SPREADSHEET_ID_LOG = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID_LOG");

    let query1: InsertLineQuery = {
        "requests": [
            {
                "insertDimension": {
                    "range": {
                        "sheetId": 0,
                        "dimension": "ROWS",
                        "startIndex": 1,
                        "endIndex": 2
                    },
                    "inheritFromBefore": false
                }
            }
        ]
    };
    InsertLinesToSheet(SPREADSHEET_ID_LOG, query1);

    let query2: SetValueQuery = {
        "valueInputOption": "USER_ENTERED",
        "data": [
            {
                "majorDimension": "ROWS",
                "range": "log!A2:D2",
                "values": [
                    [
                        date,
                        user_id,
                        command,
                        message
                    ]
                ]
            }
        ]
    };
    SetValuesOfSheet(SPREADSHEET_ID_LOG, query2);
}