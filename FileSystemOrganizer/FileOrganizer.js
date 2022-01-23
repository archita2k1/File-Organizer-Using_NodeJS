#!/usr/bin/env node
// This is a cmd project - no front end

// taking input - when you give input in terminal, it is treated as an array. 
// let inputArr = process.argv[2]; // node filename Archita
//console.log(inputArr);// Archita
let inputArr = process.argv.slice(2);
let fs = require('fs');
const path = require('path');
const helpModule = require('./commands/help')
const treeModule = require('./commands/tree')
const organizeModule = require('./commands/organize')
// console.log(inputArr);
// node FileOrganizer.js tree "directoryPath"
// node FileOrganizer.js organize "directoryPath"
// node FileOrganizer.js help

let types = {
  media: ['mp4', 'mkv', 'webm', 'psd', 'ogg', 'jpeg', 'gif', 'png'],
  archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', 'xz'],
  documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
  app: ['exe', 'dmg', 'pkg', 'deb']
};
let command = inputArr[0];
switch (command) {
  case "tree":
    treeModule.treeKey(inputArr[1]);
    break;
  case "organize":
    organizeModule.organizeKey(inputArr[1]);
    break;
  case "help":
    helpModule.helpKey();
    break;
  default:
    console.log("Please Input Right Command");
    break;
}
