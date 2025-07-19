//large code can be split into smaller parts called modules

//about importing and writing external module

//const math = require("math")  //This will find module built in the node JS enviroment
const {add,sub} = require("./math")

console.log("Addition = "+math.add(21,9));
console.log("Addition = "+math.sub(21,9));