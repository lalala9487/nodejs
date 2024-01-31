//os module

const os = require("os");

const user = os.userInfo();

console.log(user);

console.log(`the system is running ${os.uptime()} seconds`);

console.log(os.totalmem(), os.freemem());