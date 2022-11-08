function register(user_id: any) {
    let sheet_id_userList = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID_USERLIST");
    let query1: GetValueQuery = {
        "ranges": [
            "list!A2:A"
        ],
        "majorDimension": "ROWS"
    };

    let users_list = getValuesOfSheet(sheet_id_userList, query1);
    if (users_list.indexOf(user_id) != -1) {
        return "You are already registered."
    }

    let original_sheet = DriveApp.getFileById(PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID_USERDATA_MASTER"));
    let output_folder = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty("FOLDER_USERDATA_ID"));
    let output_file_name = original_sheet.getName().replace("master", "") + user_id;

    let copied_sheet = original_sheet.makeCopy(output_file_name, output_folder);
    let copied_sheet_id = copied_sheet.getId();
    let query2: SetValueQuery = {
        "valueInputOption": "USER_ENTERED",
        "data": [
            {
                "range": "general!B1",
                "values": user_id
            }
        ]
    };

    SetValuesOfSheet(copied_sheet_id, query2);

    return "Your registration was successful."
}