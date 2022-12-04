function getSheetIdUserData(user_id: any) {
    // ユーザーデータファイルの取得
    let folder_userData = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty("FOLDER_USERDATA_ID"));
    let files_list = folder_userData.getFiles();
    let sheet_id_userData;
    while (files_list.hasNext()) {
        let file = files_list.next();
        let file_name = file.getName();
        if (file_name.substring(9) == user_id) {
            sheet_id_userData = file.getId();
            break;
        }
    }

    return sheet_id_userData;
}