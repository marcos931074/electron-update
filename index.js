const path = require("path");
const { app, BrowserWindow } = require("electron");
const { autoUpdater } = require("electron-updater")
const isDev = require("electron-is-dev");

const createWindow = () => {
	const win = new BrowserWindow({
		width: 1200,
		height: 800,
		webPreferences: {
			nodeIntegration: true,
			enableRemoteModule: true
		},
	});

	win.loadURL(
		isDev
			? `file://${path.join(__dirname, "./src/html/index.html")}`
			: `file://${path.join(__dirname, "./src/html/index.html")}`
	);

	autoUpdater.checkForUpdatesAndNotify()
}

app.whenReady().then(createWindow);