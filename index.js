const path = require("path");
const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

require('update-electron-app')()

const createWindow = () => {
	// Create the browser window.
	const win = new BrowserWindow({
		width: 1200,
		height: 800,
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true,
            contextIsolation: true
		},
	});

	win.loadURL(
		isDev
			? `file://${path.join(__dirname, "./src/html/index.html")}`
			: `file://${path.join(__dirname, "./src/html/index.html")}`
	);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
})

app.on("activate", () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
})