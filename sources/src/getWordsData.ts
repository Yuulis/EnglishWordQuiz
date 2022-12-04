function getWordsData(user_id: any, sheet_type: Number) {
    let sheet_id_userData = getSheetIdUserData(user_id);

    // 単語、品詞、意味、メモを取得
    let query: GetValueQuery = {
        "ranges": [
            "words_all!A2:A",
            "words_all!B2:B",
            "words_all!C2:C",
            "words_all!D2:D"
        ],
        "majorDimension": "ROWS"
    };

    let userData = getValuesOfSheet(sheet_id_userData, query);
    let idx = getRandomInt(userData.length);

    return [userData[0][idx], userData[1][idx], userData[2][idx], userData[3][idx]];
}