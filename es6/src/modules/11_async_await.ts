import thenFS from 'then-fs'
console.log('A')
async function getAllFiles() {
    console.log('B')
    const r1 = await thenFS.readFile('./02_import.ts', 'utf8')
    const r2 = await thenFS.readFile('./07_then-fs_promise.js', 'utf8')
    const r3 = await thenFS.readFile('./test.js', 'utf8')
    console.log(r1,r2,r3)
    console.log('D')
}

getAllFiles();
console.log('C')