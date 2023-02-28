// for(let i = 0; i < 3; i++){
//     setTimeout(() => console.log(i));
// }
let num: number;
num = 12;
//const str: string = "abcd"; //you don't may change value when type const
let str: string = "abcd";
str = "lmn";
let style: "backgroundcolor" | "color";
let color: "red" | "white" | "green"| "blue";
function f1(n1: number, n2: number): number{
    return n1 + n2;
}
// f1(1, 1); //you can give here only type number, another - erorr
function f2(array: number[]): number{
    return array.reduce((res, cur) => res + cur, 0);
}
function strNumAction(strNum: string | number): number {
    let res:number;
    if (typeof strNum == "string"){
        res = strNum.length;
    }else{
        res = strNum * 2;
    }
    return res;
}
console.log(strNumAction("10"));
let ar: number[] | string[];
ar = [1, 2, 3];
ar = ["1", "avc", "3"];
let ar1: (number|string)[];
ar1 = [4, "abc", 5];

type Color = "red" | "white" | "green"| "blue" | "yellow" | "gray" | "brown" | "black";
let someColor: Color;
someColor = "green";
type Comparator = ((num1: number, num2: number) => number) | ((ar: number[]) => number);
let someComparator: Comparator;
someComparator = (n1, n2) => n1-n2;
someComparator = f1;
someComparator = f2;
//
type Person = {
    id: number;
    name: string;
    age?: number;
}
const person: Person = {id: 105, name: "Vasya", age: 30};

//#29
const aCodeAscii: number = 97;
const zCodeAscii: number = 122
const nEnglishLetters: number = 26;
function shiftRound(str: string, shift: number): string {
    
    return cipherDecipher(str, shift, mapperCipher);
}
function unshiftRound(str: string, shift: number): string {
    
    return cipherDecipher(str, shift, mapperDecipher);
}
type MapperFunction = (symb: string, shift: number) => string;
function cipherDecipher (str: string, shift: number, mapperFun: MapperFunction): string {
    const arStr: Array<string> = Array.from(str);
    const arRes: Array<string> = arStr.map(symb => {
        let res: string = symb;
        if(symb <= 'z' && symb >= 'a'){
            res = mapperFun(symb, shift);
        }
        return res;
    })
    return arRes.join('');
}
function mapperCipher(symb: string, shift: number) : string {
    const actualShift: number = (symb.charCodeAt(0) - aCodeAscii + shift) % nEnglishLetters;
    return String.fromCharCode(aCodeAscii + actualShift);
}
function mapperDecipher(symb: string, shift: number) : string {
    const actualShift: number = (zCodeAscii - symb.charCodeAt(0) + shift) % nEnglishLetters;
    return String.fromCharCode(zCodeAscii - actualShift);
}