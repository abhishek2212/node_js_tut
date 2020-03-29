//console.log('abhishek');
//console.log('hey ninja');

// setTimeout(function(){
//     console.log('3 seconds have passed');
// },3000);

//==========================================
/*
var time=0;
var timer=setInterval(function(){
    time +=2;
    console.log(time+' seconds have passed');
    if(time>5)
        clearInterval(timer);
},2000);
*/
//========================================
console.log(__dirname);
console.log(__filename);

var os = require('os');
console.log("os.freemem(): ",os.freemem());
console.log('os.homedir(): ', os.homedir());
console.log("os.hostname(): \n", os.hostname());
console.log("os.endianness(): \n", os.endianness());
console.log("os.loadavg(): \n", os.loadavg());
console.log("os.platform(): \n", os.platform());
console.log("os.release(): \n", os.release());
console.log("os.tmpdir(): \n", os.tmpdir());
console.log("os.totalmem(): \n", os.totalmem());
console.log("os.type(): \n", os.type());
console.log("os.uptime(): \n", os.uptime());
console.log("os.cpus(): \n", os.cpus());
console.log("os.arch(): \n", os.arch());
console.log("os.networkInterfaces(): \n", os.networkInterfaces());