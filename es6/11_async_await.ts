import thenFS from "then-fs"

async function getAllFiles() {
    const r1 = await thenFS.readFile('./02_import.ts', 'utf8')
    console.log(r1)
    const r2 = await thenFS.readFile('./07_then-fs_promise.js', 'utf8')
    console.log(r2)
    const r3 = await thenFS.readFile('./test.js', 'utf8')
    console.log(r3)
}

getAllFiles();