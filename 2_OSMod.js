const os = require('os')
// This is used in apps which allow us to find out whether a partcular application can work on the system (on the basis of specifications)
console.log(os.arch());//architecture
console.log(os.platform());//tells about system platform
console.log(os.networkInterfaces());//gives deatils about your network
// console.log(os.cpus());