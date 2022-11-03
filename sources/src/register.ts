function register(user_id: any) {
    let sheet_id_userList = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID_USERLIST");
    let query = {
        "ranges": "list!A2:A",
        "majorDimension": "ROWS"
    };
    let users_list = getValuesFromSheet(sheet_id_userList, query);

    if (users_list.indexOf(user_id) != -1) {
        return "You are already registered."
    }

    let original_sheet = DriveApp.getFileById(PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID_USERDATA_MASTER"));
    let output_folder = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty("FOLDER_USERDATA_ID"));
    let output_file_name = original_sheet.getName().replace("master", "") + user_id;
    original_sheet.makeCopy(output_file_name, output_folder);

    return "Your registration was successful."
}