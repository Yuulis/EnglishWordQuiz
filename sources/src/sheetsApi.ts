function getValuesFromSheet(sheet_id: any, query: any) {
    let response = Sheets.Spreadsheets.Values.batchGet(sheet_id, query).valueRanges;

    let values = new Array();
    for (let i in response) {
        values.push(response[i]["values"]);
    }

    return values;
}