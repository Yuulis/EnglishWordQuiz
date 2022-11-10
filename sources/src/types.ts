// ===== For Sheets API =====
type ValueRange = {
    "majorDimension": String
    "range": string,
    "values": [
        string[]
    ]
}

type DimensionRange = {
    "sheetId": 0,
    "dimension": String,
    "startIndex": Number,
    "endIndex": Number
}

type Request = {
    "insertDimension": {
        "range": DimensionRange,
        "inheritFromBefore": Boolean
    }
}

type GetValueQuery = {
    "ranges": string[],
    "majorDimension": string,
}

type SetValueQuery = {
    "valueInputOption": string,
    "data": ValueRange[]
}

type InsertLineQuery = {
    "requests": Request[]
}