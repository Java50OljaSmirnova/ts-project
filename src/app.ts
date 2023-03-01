import { CipherRightShift } from "./CipherRightShift";
import { CipherLeftShift } from "./CipherLeftShift";
import { displayCipherDecipher } from "./displayCipherDecipher";

const cipherRightShift: CipherRightShift = new CipherRightShift(10);
const cipherLeftShift: CipherLeftShift = new CipherLeftShift(10);
displayCipherDecipher(cipherRightShift, "abcd");
displayCipherDecipher(cipherLeftShift, "mnop");
