
let fs = require('fs');
const path = require('path');

let types = {
  media: ['mp4', 'mkv', 'webm', 'psd', 'ogg', 'jpeg', 'gif', 'png'],
  archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', 'xz'],
  documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
  app: ['exe', 'dmg', 'pkg', 'deb']
};

function organizeFn(dirPath) {
  // console.log("Organize command implemented for ", dirPath);
  // 1. input -> directory path given
  let destPath;
  if (dirPath == undefined) {
    // console.log("Kindly enter the path");
    destPath = process.cwd()
    return;
  } else {
    let doesExist = fs.existsSync(dirPath);
    // console.log(doesExist);q\\iu
    if (doesExist) {
      // 2. organize -> organized_files -> directory
      destPath = path.join(dirPath, "organized_files");// create path of the organized_files folder 
      if (fs.existsSync(destPath) == false) {
        fs.mkdirSync(destPath);
      } else {
        console.log("This folder already exists");
      }
    } else {
      console.log("Kindly enter a valid path");
    }

  }
  // 3. identify category of all files in the directory
  organizeHelper(dirPath, destPath);
  // 4. copy/cut files to respective category in the organized directory
  // 5. 
}
// 3. identify category of all files in the directory
function organizeHelper(src, dest) {
  let childNames = fs.readdirSync(src); // get all the files and folders inside your src in array form
  for (let i = 0; i < childNames.length; i++) {
    let childAddress = path.join(src, childNames[i]);// path is identified for the files
    let isFile = fs.lstatSync(childAddress).isFile(); // lstatSync contains key called isFile which checks whether the children are a file or not
    // console.log(childAddress + " " +isFile);
    if (isFile) {
      let fileCategory = getCategory(childNames[i]);
      console.log(childNames[i] + " belongs to " + fileCategory);
      // 4. copy/cut files to respective category in the organized directory
      sendFiles(childAddress, dest, fileCategory);
    }
  }
}
function getCategory(name) {
  let ext = path.extname(name);
  ext = ext.slice(1);//remove dot from ext
  // console.log(ext);
  // for in is best for looping of objects
  for (let type in types) {
    let cTypeArr = types[type];
    for (let i = 0; i < cTypeArr.length; i++) {
      if (ext == cTypeArr[i]) {
        // we matched the extension with the values present in cTypeArr
        return type;
      }
    }
  }
  return 'others';
}
function sendFiles(srcFilePath, dest, fileCategory) {
  let catPath = path.join(dest, fileCategory);
  if (fs.existsSync(catPath) == false) { // checking for category Folder path
    fs.mkdirSync(catPath);
  }
  let fileName = path.basename(srcFilePath); // took out file names
  let destFilePath = path.join(catPath, fileName);//created path for files in category folger

  fs.copyFileSync(srcFilePath, destFilePath);// copied files from source to destination
  fs.unlinkSync(srcFilePath);// deleted previous files
  console.log(fileName + " is copied to " + fileCategory);

}

module.exports = {
 organizeKey:organizeFn
}