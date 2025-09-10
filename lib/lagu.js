const fs = require('node:fs')
const path = require('node:path')

function lagug(musik){
    return new Promise((resolve, reject)=>{
        if(!fs.existsSync('musik')){
           resolve(fs.mkdirSync('musik')) 
        }
        for(let i =0;i < musik.length; i++ ){
            let file = path.join('musik', musik[i])
             fs.writeFile(file,'', ()=>{})      
        } 
        reject(new Error('gagal broh'))
    })
}

module.exports = {
    lagug,
}