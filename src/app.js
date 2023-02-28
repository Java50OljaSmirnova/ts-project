"use strict";
// for(let i = 0; i < 3; i++){
//     setTimeout(() => console.log(i));
// }
let num;
num = 12;
//const str: string = "abcd"; //you don't may change value when type const
let str = "abcd";
str = "lmn";
let style;
let color;
function f1(n1, n2) {
    return n1 + n2;
}
// f1(1, 1); //you can give here only type number, another - erorr
function f2(array) {
    return array.reduce((res, cur) => res + cur, 0);
}
function strNumAction(strNum) {
    let res;
    if (typeof strNum == "string") {
        res = strNum.length;
    }
    else {
        res = strNum * 2;
    }
    return res;
}
console.log(strNumAction("10"));
let ar;
ar = [1, 2, 3];
ar = ["1", "avc", "3"];
let ar1;
ar1 = [4, "abc", 5];
let someColor;
someColor = "green";
let someComparator;
someComparator = (n1, n2) => n1 - n2;
someComparator = f1;
someComparator = f2;
const person = { id: 105, name: "Vasya", age: 30 };
//#29
function shiftRound(str, shift) {
    //TODO
    return "";
}
function unshiftRound(str, shift) {
    //TODO
    return "";
}
//# sourceMappingURL=app.js.map