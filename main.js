const path = require('path')
const url = require('url')
const electron = require("electron")

let mainWindow = null

function createMainWindow() {
  mainWindow = new electron.BrowserWindow({width: 800, height: 600})

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'home.html'),
    protocol: 'file:',
    slashes: true
  }))

  mainWindow.webContents.openDevTools()

  mainWindow.on("closed", () => {
    this.mainWindow = null
  })
}

electron.app.on("ready", () => {
  createMainWindow()
})

electron.app.on("window-all-closed", () => {
  if( process.platform !== "darwin" ) {
    electron.app.quit()
  }
})

electron.app.on("activate", () => {
  if( mainWindow === null ) {
    createMainWindow()
  }
})
