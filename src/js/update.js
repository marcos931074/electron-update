const uaup = require('uaup-js');

//This is Optional
const defaultStages = {
    Checking: "Checando...", // When Checking For Updates.
    Found: "Atualizacao encontrada!",  // If an Update is Found.
    NotFound: "Sem atualizacoes.", // If an Update is Not Found.
    Downloading: "Baixando...", // When Downloading Update.
    Unzipping: "Instalando...", // When Unzipping the Archive into the Application Directory.
    Cleaning: "Finalizando...", // When Removing Temp Directories and Files (ex: update archive and tmp directory).
    Launch: "Executando..." // When Launching the Application.
}

const updateOptions = {
    gitRepo: "electron-update", // [Required] Your Repo Name
    gitUsername: "marcos931074",  // [Required] Your GitHub Username.

    appName: "electron-update", //[Required] The Name of the app archive and the app folder.
    appExecutableName: "electron-update.exe", //[Required] The Executable of the Application to be Run after updating.

    progressBar: document.getElementById("download"), // {Default is null} [Optional] If Using Electron with a HTML Progressbar, use that element here, otherwise ignore
    label: document.getElementById("download-label"), // {Default is null} [Optional] If Using Electron, this will be the area where we put status updates using InnerHTML
    stageTitles: defaultStages, // {Default is defaultStages} [Optional] Sets the Status Title for Each Stage
}

uaup.Update(updateOptions)