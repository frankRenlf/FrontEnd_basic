import tfs from 'then-fs'

export default function getFile(fpath) {
    return new Promise(function (resolve, reject) {
        tfs.readFile(fpath, 'utf8',(error,date)=>{
            if(error)return reject(error)
            resolve(date)
        })
    })
}