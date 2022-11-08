function getValuesOfSheet(sheet_id: string, query: GetValueQuery) {
    let response = Sheets.Spreadsheets.Values.batchGet(sheet_id, query).valueRanges;

    let array = new Array();
    if (query.majorDimension == "ROWS") {
        for (const valueRange of response) {
            for (const value of valueRange.values) {
                array.push(value);
            }
        }
    } else {
        for (const valueRange of response) {
            for (const value of valueRange.values) {
                for (const item of value) {
                    array.push(item);
                }
            }
        }
    }

    return array;
}


function SetValuesOfSheet(sheet_id: any, query: any) {
    Sheets.Spreadsheets.Values.batchUpdate(sheet_id, query);
}


function InsertLInesToSheet(sheet_id: any, query: any) {
    Sheets.Spreadsheets.batchUpdate(sheet_id, query);
}