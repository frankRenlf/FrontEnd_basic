import res from './10_promise_getFile.js'
res('./06.js').then((res) => {
    console.log('-',res,'-')
},(err)=>{
    console.log('-',err,'-')
})