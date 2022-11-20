// Sheetから値を読み取り
function getValuesOfSheet(sheet_id: string, query: GetValueQuery) {
    let response = Sheets.Spreadsheets.Values.batchGet(sheet_id, query).valueRanges;

    let array = new Array();
    for (let i in response) {
        for (let j in response[i]["values"]) {
            for (const item of response[i]["values"][j]) {
                array.push(item);
            }
        }
    }

    return array;
}


// Sheetに値を書き込み
function SetValuesOfSheet(sheet_id: any, query: any) {
    Sheets.Spreadsheets.Values.batchUpdate(query, sheet_id);
}


// Sheetの一括更新
function UpdateSheet(sheet_id: any, query: any) {
    Sheets.Spreadsheets.batchUpdate(query, sheet_id);
}