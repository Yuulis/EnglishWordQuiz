// Sheetから値を読み取り
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

// Sheetに値を書き込み
function SetValuesOfSheet(sheet_id: any, query: any) {
    Sheets.Spreadsheets.Values.batchUpdate(query, sheet_id);
}

// Sheetに行を挿入
function InsertLinesToSheet(sheet_id: any, query: any) {
    Sheets.Spreadsheets.batchUpdate(query, sheet_id);
}