var { app, BrowserWindow } = require('electron');

var mainWindow = null;


app.on('window-all-closed', function () {
    app.quit();
});

app.on('ready', function () {
    mainWindow = new BrowserWindow({
        width: 590,
        height: 352,
        resizable: false,
        maximizable: false
    });
    mainWindow.setMenu(null);
    mainWindow.setMenuBarVisibility(false);

    mainWindow.loadFile('index.html');

    // mainWindow.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});




