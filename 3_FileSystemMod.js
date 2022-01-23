// to access file system 
// File system Module

//***FILES****//

const fs = require('fs');
const path = require('path');// see the 4_path.js file for more info

//1. reading and writing updating and deleting file

// let content = fs.readFileSync('node.txt');
// console.log("This is file data " + content); convert binary data to string

// 2. Writng to a file
// writeFileSync
// fs.writeFileSync('node.txt',"This is written through 3_File... page")
// if file doesnt exist then new file will be created on its own with the same name
// fs.writeFileSync('f1.txt',"This file was created by 3_File... page")

// append a file 

// appendFileSync Method adds new data to a previously written file
// fs.appendFileSync('node.txt',"This is written through 3_File... page")

//delete a file

//unlinkSync
// fs.unlinkSync('f1.txt')
// console.log('f1 file deleted');

//****FOLDERS/ DIRECTORIES****//

//creating a directory

//mkdirSync - used to create a new directory or folder
// fs.mkdirSync('MyDir');
// console.log('Directory created');
// fs.rmdirSync('MyDirectory')

// To check whether a directory exists or not
// let doesExist = fs.existsSync('MyDir');
// console.log('doesExist '+ doesExist);

// let statsOfDir = fs.lstatSync('myDir')
// // console.log(statsOfDir);

// console.log('isFile?', statsOfDir.isFile());
// console.log('isDirectory?', statsOfDir.isDirectory());

// readdirSync - used to check content inside a directory

let folderpath = 'C:\\Users\\ARCHITA\\Desktop\\In-the-middle\\NodePep\\MyDirectory';
let foldercontent = fs.readdirSync(folderpath);
console.log("Directory content "+ foldercontent);

// Copying Files
// source file, destination path
let srcFilePath = 'C:\\Users\\ARCHITA\\Desktop\\In-the-middle\\NodePep\\MyDirectory\\something.txt';
let destinationPath = 'C:\\Users\\ARCHITA\\Desktop\\In-the-middle\\NodePep\\MyDir';

let tobecopiedfile = path.basename(srcFilePath);
console.log(tobecopiedfile);

let destPath = path.join(destinationPath,tobecopiedfile);
console.log(destPath);

fs.copyFileSync(srcFilePath,destPath);
console.log('File Copied');