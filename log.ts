function writeLog(date: any, user_id: any, command: any) {
    const SPREADSHEET_ID_LOG = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID_LOG");

    let spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID_LOG);
    let sheet = spreadsheet.getSheetByName("log");

    sheet.appendRow([date, user_id, command]);
}