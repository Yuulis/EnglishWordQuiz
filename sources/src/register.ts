// ユーザー登録
function register(user_id: any) {
    let sheet_id_userList = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID_USERLIST");
    let query1: GetValueQuery = {
        "ranges": [
            "list!A2:A"
        ],
        "majorDimension": "ROWS"
    };

    // userListに既に存在するならば、処理打ち切り
    let users_list = getValuesOfSheet(sheet_id_userList, query1);
    if (users_list.indexOf(user_id) != -1) {
        return "You are already registered."
    }

    // userData_masterのコピー
    let original_sheet = DriveApp.getFileById(PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID_USERDATA_MASTER"));
    let output_folder = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty("FOLDER_USERDATA_ID"));
    let output_file_name = original_sheet.getName().replace("master", "") + user_id;

    // userDataの編集
    let copied_sheet = original_sheet.makeCopy(output_file_name, output_folder);
    let copied_sheet_id = copied_sheet.getId();
    let query2: SetValueQuery = {
        "valueInputOption": "USER_ENTERED",
        "data": [
            {
                "majorDimension": "ROWS",
                "range": "general!B1",
                "values": [
                    [
                        user_id
                    ]
                ]
            }
        ]
    };
    SetValuesOfSheet(copied_sheet_id, query2);

    // userListに追加
    let query3: UpdateQuery = {
        "requests": [
            {
                "insertDimension": {
                    "range": {
                        "sheetId": 0,
                        "dimension": "ROWS",
                        "startIndex": 1,
                        "endIndex": 2
                    },
                    "inheritFromBefore": false
                }
            }
        ]
    };
    UpdateSheet(sheet_id_userList, query3);

    query2 = {
        "valueInputOption": "USER_ENTERED",
        "data": [
            {
                "majorDimension": "ROWS",
                "range": "list!A2",
                "values": [
                    [
                        user_id
                    ]
                ]
            }
        ]
    };
    SetValuesOfSheet(sheet_id_userList, query2);

    return "Successfully registered."
}


// ユーザー登録解除
function unregister(user_id: any) {
    let sheet_id_userList = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID_USERLIST");
    let query1: GetValueQuery = {
        "ranges": [
            "list!A2:A"
        ],
        "majorDimension": "ROWS"
    };

    // userListから削除
    let users_list = getValuesOfSheet(sheet_id_userList, query1);
    let idx = users_list.indexOf(user_id);
    if (idx == -1) {
        return "You've not been registered yet."
    } else {
        let query: UpdateQuery = {
            "requests": [
                {
                    "deleteDimension": {
                        "range": {
                            "sheetId": 0,
                            "dimension": "ROWS",
                            "startIndex": idx + 1,
                            "endIndex": idx + 2
                        }
                    }
                },
            ]
        }
        UpdateSheet(sheet_id_userList, query);
    }

    // userDataファイル削除
    let folder_userdata = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty("FOLDER_USERDATA_ID"));
    let files_list = folder_userdata.getFiles();
    while (files_list.hasNext()) {
        let file = files_list.next();
        let file_name = file.getName();
        if (file_name.substring(9) == user_id) {
            file.setTrashed(true);
        }
    }

    return "Successfully unregistered. Thank you for using!"
}