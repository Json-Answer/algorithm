"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.othersToTen = exports.tenToOthers = void 0;
// 字典A-Z
const dict = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "k",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
/**
 * 10进制转换成2-36进制 Base conversion
 * @param num { number } 需要转换的数字 Number to be converted
 * @param targetBaseNum { number } 目标进制数 target base number
 * @returns string
 */
const tenToOthers = (num, targetBaseNum) => {
    let res = "";
    let temp = String(num);
    const tempArr = [];
    let continued = true;
    do {
        if (parseInt(temp) >= targetBaseNum) {
            tempArr.push(getDict(String(parseInt(temp) % targetBaseNum)));
            temp = String(Math.floor(parseInt(temp) / targetBaseNum));
        }
        else {
            tempArr.push(getDict(temp));
            continued = false;
        }
    } while (continued);
    do {
        res += tempArr.pop();
    } while (tempArr.length);
    return res;
};
exports.tenToOthers = tenToOthers;
/**
 * 2-36进制转换成10进制 Base conversion
 * @param num { number } 需要转换的数字 Number to be converted
 * @param sourceBaseNum { number } 原始进制数 source base number
 * @returns number
 */
const othersToTen = (num, sourceBaseNum) => {
    let res = 0;
    const tempArr = num.split("");
    const resArr = [];
    for (let i = 0, len = tempArr.length; i < len; i++) {
        const item = tempArr[i];
        if (dict.indexOf(item.toUpperCase()) === -1) {
            resArr.unshift(parseInt(item));
            continue;
        }
        resArr.unshift(dictToNum(item));
    }
    for (let i = 0, len = resArr.length; i < len; i++) {
        const item = resArr[i];
        res += item * Math.pow(sourceBaseNum, i);
    }
    return res;
};
exports.othersToTen = othersToTen;
/**
 * 获取数字对应的字典 Get the dictionary corresponding to the number
 * @param num { string } 需要判断的数字,字符串类型 Number to be judged, string type.
 * @returns string
 */
const getDict = (num) => {
    if (parseInt(num) > 10) {
        const index = parseInt(num) % 10;
        return dict[index];
    }
    return num;
};
/**
 * 字符获取对应的进制数字 Character to get the corresponding base number.
 * @param word { string } 单词 word
 * @returns string
 */
const dictToNum = (word) => {
    return dict.indexOf(word.toUpperCase()) + 10;
};
/**
 * 进制转换 Base conversion
 * @param num { number } 需要转换的数字 Number to be converted
 * @param targetBaseNum { number } 目标进制数 target base number
 * @param sourceBaseNum { number } 原始进制数,默认为10 source base number, default is 10
 * @returns string | number
 */
const toHex = (num, targetBaseNum, sourceBaseNum = 10) => {
    let res = "";
    if (targetBaseNum < 2 ||
        targetBaseNum > 36 ||
        sourceBaseNum < 2 ||
        sourceBaseNum > 36)
        return new Error("Params Error: baseNum is a number from 2-36!");
    if (sourceBaseNum === 10) {
        if (typeof num === "string")
            num = parseInt(num);
        return (0, exports.tenToOthers)(num, targetBaseNum);
    }
    if (targetBaseNum === 10) {
        if (typeof num === "number")
            num = num.toString();
        return (0, exports.othersToTen)(num, sourceBaseNum);
    }
    if (typeof num === "number") {
        num = num.toString();
    }
    const temp = (0, exports.othersToTen)(num, sourceBaseNum);
    res = (0, exports.tenToOthers)(temp, targetBaseNum);
    return res;
};
exports.default = toHex;
