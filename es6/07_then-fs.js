import tfs from 'then-fs'

tfs.readFile('./01.js','utf8').then((res)=>{
    console.log('./01.js')
    console.log(res)
})

tfs.readFile('./02.js','utf8').then((res)=>{
    console.log('./02.js')
    console.log(res)
})

tfs.readFile('./06.js','utf8').then((res)=>{
    console.log('./06.js')
    console.log(res)
})