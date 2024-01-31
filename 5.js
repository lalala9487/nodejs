//file system module
//readFileSync 同步 一行接一行做 效率差
//readFile 非同步 可以先做別的任務 較有效率

const fs = require('fs');

const first = fs.readFileSync("./content/1.txt", "utf8");

console.log(first);

fs.writeFileSync("./content/2.txt", "this is second txt file","utf8");