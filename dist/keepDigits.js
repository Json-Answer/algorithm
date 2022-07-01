"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 保留整数有效数字位
 * @param number { number } 原数字 number
 * @param digital { number } 保留位数 number of digits
 * @returns string
 */
const keepDigits = (number, digital = 2) => {
    let res = number.toString();
    const zeroNum = digital - res.length;
    for (let i = 0; i < zeroNum; i++) {
        res = `0${res}`;
    }
    return res;
};
exports.default = keepDigits;
