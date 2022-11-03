function getValuesFromSheet(sheet_id: any, query: any) {
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


function UpdateValuesInSheet(sheet_id: any, query: any) {

}