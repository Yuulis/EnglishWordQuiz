type ValueRange = {
    "range": string,
    "values": [
        string[]
    ]
}

type DimensionRange = {
    "sheetId": String,
    "dimension": String,
    "startIndex": Number,
    "endIndex": Number
}

type Request = {
    "range": DimensionRange,
    "inheritFromBefore": Boolean
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
    "requests": Request
}