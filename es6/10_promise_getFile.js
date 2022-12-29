import tfs from 'then-fs'

export default function getFile(fpath) {
    return new Promise(function (resolve, reject) {
        tfs.readFile(fpath, 'utf8',(err,dateStr)=>{
            if(err)return reject(err)
            resolve(dateStr)
        })
    })
}