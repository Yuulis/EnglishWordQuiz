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
    "insertDimension"?: {
        "range": DimensionRange,
        "inheritFromBefore": Boolean
    },
    "deleteDimension"?: {
        "range": DimensionRange
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

type UpdateQuery = {
    "requests": Request[]
}
