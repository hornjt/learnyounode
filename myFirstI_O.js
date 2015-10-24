var fs = require("fs");
var file = process.argv[2];
var bf = fs.readFileSync(file);
var count = bf.toString().split("\n");
console.log(count.length - 1);
//console.log(bf.toString());