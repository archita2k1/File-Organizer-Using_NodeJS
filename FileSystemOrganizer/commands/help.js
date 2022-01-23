
function helpFn() {
  console.log(`
 List of All commands:
          node FileOrganizer.js tree "directoryPath"
          node FileOrganizer.js organize "directoryPath"
          node FileOrganizer.js help
 `);
}
 module.exports = {
  helpKey : helpFn
 }