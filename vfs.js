class File {
    constructor(name, file, icon, fileType, isDIR, dateCreated, dateModified) {
        this.name = name;
        this.file = file;
        this.icon = icon;
        this.fileType = fileType;
        this.isDIR = isDIR;
        this.dateCreated = dateCreated;
        this.dateModified = dateModified;
    }
}
class VFS {
    constructor() {
        this.fs = {};
    }
    create(path, file, icon = "fileicon.svg") {
        var date = new Date();
    
        localStorage.setItem(path, {
          name: path,
          file: file,
          icon: icon,
          fileType: path.substring(0, path.lastIndexOf('.')),
          isDIR: false,
          dateCreated: date.toDateString(),
          dateModified: date.toDateString(),
        });
    }
    createDir(path) {
        var date = new Date();
        localStorage.setItem(path, {
          name: path,
          file: null,
          fileType: null,
          isDIR: true,
          dateCreated: date.toDateString(),
          dateModified: date.toDateString(),
        });
    }
    open(path) {
        return localStorage[path];
    }
    listAllFiles() {
        var files = [];
        for(var i = 0; i < Object.keys(localStorage); i++) {
            files.push(localStorage[Object.keys(localStorage)[i]].file);
        }
        return files;
    }
    exists(path) {
        return localStorage[path] !== undefined;
    }
    isDir(path) {
        return localStorage[path].isDIR;
    }
    read(path) {
        if(this.exists(path)) {
            return localStorage[path]["file"];
        }
        else {
            throw "File does not exist";
        }
    }
    write(path, data) {
        if(this.exists(path)) {
            localStorage[path]["file"] = data;
        }
        else {
            throw "File does not exist";
        }
    }
    append(path, data) {
        if(this.exists(path)) {
            localStorage[path]["file"] += data;
        }
        else {
            throw "File does not exist";
        }
    }
}