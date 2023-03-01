import { Cipher } from "./Cipher";

export class CipherImpl implements Cipher {
    protected constructor(private shift: number, private aCodeAscii: number = ' '.charCodeAt(0),
    private zCodeAscii: number = '~'.charCodeAt(0), private nEnglishLetters: number = zCodeAscii - aCodeAscii + 1) { }
    cipher(plainText: string): string {
        const arStr: Array<string> = Array.from(plainText);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb >= ' ' && symb <= '~') {
                const actualShift: number = (symb.charCodeAt(0) - this.aCodeAscii + this.shift) 
                % this.nEnglishLetters;
                res = String.fromCharCode(this.aCodeAscii + actualShift)
            }
            return res;
        })
        return arRes.join('');
    }
    decipher(cipherText: string): string {
        const arStr: Array<string> = Array.from(cipherText);
        const arRes: Array<string> = arStr.map(symb => {
            let res: string = symb;
            if (symb >= ' ' && symb <= '~') {
                const actualShift: number = (this.zCodeAscii - symb.charCodeAt(0) + this.shift) 
                % this.nEnglishLetters;
                res = String.fromCharCode(this.zCodeAscii - actualShift)
            }
            return res;
        })
        return arRes.join('');
    }
}