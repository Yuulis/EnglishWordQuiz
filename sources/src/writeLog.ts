function writeLog(date: any = null, user_id: any = null, command: any = null, message: any = null) {
    const SPREADSHEET_ID_LOG = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID_LOG");

    let query1: InsertLineQuery = {
        "requests": {
            "range": {
                "sheetId": SPREADSHEET_ID_LOG,
                "dimension": "ROWS",
                "startIndex": 1,
                "endIndex": 2
            },
            "inheritFromBefore": false
        }
    };

    InsertLInesToSheet(SPREADSHEET_ID_LOG, query1);

    let query2: SetValueQuery = {
        "valueInputOption": "USER_ENTERED",
        "data": [
            {
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