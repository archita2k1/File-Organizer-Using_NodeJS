//child process is a node module used to create sub process within a script
//you can do different tasks with your script
// integrate different tasks together

const cp = require('child_process') // module with const only

// console.log('Trying to open calculator');

// cp.execSync('calc')// in built command to execute external process

// console.log('Trying to open VS Code');

// cp.execSync('code')

// cp.execSync('start chrome https://pomofocus.io/')// to open website

let output = cp.execSync('node test.js')
console.log('output -> ' + output);//string concatenation to convert binary to string