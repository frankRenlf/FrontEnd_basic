import tfs from 'then-fs'

export default function getFile(fpath) {
    return new Promise(function () {
        tfs.readFile(fpath, 'utf8').then((res) => {
            console.log('-',res,'-')
        })
    })
}