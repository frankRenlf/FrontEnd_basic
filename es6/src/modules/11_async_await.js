var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import thenFS from 'then-fs';
console.log('A');
function getAllFiles() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('B');
        const r1 = yield thenFS.readFile('./02_import.ts', 'utf8');
        const r2 = yield thenFS.readFile('./07_then-fs_promise.js', 'utf8');
        const r3 = yield thenFS.readFile('./test.js', 'utf8');
        console.log(r1, r2, r3);
        console.log('D');
    });
}
getAllFiles();
console.log('C');
