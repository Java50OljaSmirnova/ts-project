"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CipherRightShift_1 = require("./CipherRightShift");
const CipherLeftShift_1 = require("./CipherLeftShift");
const displayCipherDecipher_1 = require("./displayCipherDecipher");
const cipherRightShift = new CipherRightShift_1.CipherRightShift(10);
const cipherLeftShift = new CipherLeftShift_1.CipherLeftShift(10);
(0, displayCipherDecipher_1.displayCipherDecipher)(cipherRightShift, "abcd");
(0, displayCipherDecipher_1.displayCipherDecipher)(cipherLeftShift, "mnop");
//# sourceMappingURL=app.js.map