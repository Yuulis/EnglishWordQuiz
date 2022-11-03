function writeLog(date: any = null, user_id: any = null, command: any = null, message: any = null) {
    const SPREADSHEET_ID_LOG = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID_LOG");

    let spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID_LOG);
    let sheet = spreadsheet.getSheetByName("log");

    sheet.appendRow([date, user_id, command, message]);
}