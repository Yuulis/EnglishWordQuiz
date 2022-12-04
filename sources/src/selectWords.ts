function selectWords(user_id: any) {
    let data = getWordsData(user_id, 1);
    if (data[3] === "null") data[3] = null;

    return data[0] + "\r\n" + data[1] + "\r\n" + data[2] + "\r\n" + data[3];
}