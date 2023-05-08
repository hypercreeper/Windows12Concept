/// <reference path="vfs.js" />
const vfs = new VFS();
vfs.listAllFiles().forEach(file => {
    
});
var desktopItem = document.createElement("div");
desktopItem.classList.add("desktopItem");
var icon = document.createElement("img");
icon.src = vfs.open("/desktop")