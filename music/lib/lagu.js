const fs = require('node:fs')
const path = require('node:path')

function lagug(musik){
    if(!fs.existsSync('musik')){
        fs.mkdirSync('musik') 
    }
    for(let i =0;i < musik.length; i++ ){
        let file = path.join('musik', musik[i])
         fs.writeFile(file,'', ()=>{})      
    } 
    return 
}


module.exports = {
    lagug,
}
