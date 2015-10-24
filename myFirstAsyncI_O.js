var fs = require('fs')
var count = undefined
var file = process.argv[2];

function countLines(callback) {
  fs.readFile(file, function doneReading(err, fileContents) {
	var splitString = fileContents.toString().split("\n");
	count = splitString.length - 1;
    callback()
  })
}

function logMyNumber() {
  console.log(count);
}

countLines(logMyNumber);