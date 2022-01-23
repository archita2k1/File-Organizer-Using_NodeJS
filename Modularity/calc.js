const add = (a,b) => a+b;
const mul = (a,b) => a*b;
const sub = (a,b) => a-b;
const div = (a,b) => a/b;

module.exports = {
 addition : add,
 multiplication : mul,
 substraction : sub,
 division : div
}
// we created this js file as module and we can require this in other js pages and use it as we require