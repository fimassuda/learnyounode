var fs = require('fs');

var str = fs.readFileSync(process.argv[2]).toString();
// fs.readFileSync(process.argv[2],'utf8')

console.log(str.split('\n').length-1);

