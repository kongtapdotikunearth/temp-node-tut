const path = require('path');
//note sep mean seperate /
console.log(path.sep);
const filePath = path.join('/content','subfolder','test.txt');
console.log(filePath);

//show the last destination
const base = path.basename(filePath);
console.log(base);

//Resolves the specified paths into an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);