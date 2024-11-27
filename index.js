const fs = require("fs");

fs.rename('message.txt','new-msg.txt',(err)=>{
    if(err) throw err;
    console.log('done')
})