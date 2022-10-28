function log(message: any, function_name: any) {
    const SPREADSHEET_ID_LOG = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID_LOG");

    let spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID_LOG);
    let sheet = spreadsheet.getSheetByName(function_name);

    sheet.appendRow[message];
}