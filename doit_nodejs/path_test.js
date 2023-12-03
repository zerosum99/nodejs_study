const path = require("path");

const fullPath = path.join("some", "work", "ex.txt");

console.log(fullPath);
console.log(path.dirname(fullPath));
console.log(__dirname);
console.log(path.dirname(__dirname));



