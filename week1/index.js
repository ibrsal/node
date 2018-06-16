// using filesystem and util moules
const fs = require('fs');
const util = require('util');
// using array-unique model by installing it with (npm --save install array-unique) instrction
// there is un error in array-unique module - it unique the original array so spilt and unique
// the string at the same time
const unique=require('array-unique');
// creat a readfile promise
const readfilep = util.promisify(fs.readFile);
//creat foure promises to read files
 const file1promis = readfilep('./message1.txt','utf8')
 const file2promis = readfilep('./message2.txt','utf8')
const file3promis = readfilep('./message3.txt','utf8')
const file4promis = readfilep('./message4.txt','utf8')
// promis all promises
Promise.all([file1promis, file2promis, file3promis, file4promis]).then((data) =>{
const dataall = data[0] + " " + data[1] + " " + data[2] + " " + data[3];
console.log(dataall);
console.log();
const dataarray= dataall.split(' ');
const datau=unique(dataall.split(' '));
datau.forEach(e => {
    const w=dataarray.filter(ww =>{
        if (ww===e){
           return ww;
        }
    })
    console.log(w[0],w.length);
});
});