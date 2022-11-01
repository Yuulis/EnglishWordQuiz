function register(user_id: any) {
    let original_sheet = DriveApp.getFileById(PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID_USERDATA_MASTER"));
    let output_folder = DriveApp.getFolderById(PropertiesService.getScriptProperties().getProperty("FOLDER_USERDATA_ID"));
    let output_file_name = original_sheet.getName().replace("master", "") + user_id;

    original_sheet.makeCopy(output_file_name, output_folder);
}