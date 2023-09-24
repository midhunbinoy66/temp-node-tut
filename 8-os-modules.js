const os = require('os');
//info about user 
const user = os.userInfo();
// method return system uptime in seconds 

console.log(`the system uptime is ${os.uptime()} seconds `);

const currentOs = {

    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};

console.log(currentOs);