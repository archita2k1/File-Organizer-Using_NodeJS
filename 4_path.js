const path = require('path');

let ext = path.extname('C:\\Users\\ARCHITA\\Desktop\\In-the-middle\\NodePep\\MyDir\\something.txt');//returns the extension name of the file

console.log(ext);
let basename = path.basename('C:\\Users\\ARCHITA\\Desktop\\In-the-middle\\NodePep\\MyDir\\something.txt');
console.log(basename);//returns the name of the file
console.log(__dirname);//path of the directory where the current file exists
console.log(__filename);//gets path of the current file