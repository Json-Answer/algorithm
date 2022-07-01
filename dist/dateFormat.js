"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keepDigits_1 = __importDefault(require("./keepDigits"));
/**
 *
 * @param time { number | Date | string } 时间戳 | 时间 | 时间字符串 timestamp | time | timestring
 * @param format { string } 格式-默认为yyyy-MM-dd HH:mm:ss Format-default is yyyy-MM-dd HH:mm:ss
 * @returns string
 */
const format = (time, format = "yyyy-MM-dd HH:mm:ss") => {
    if (typeof time === "number") {
        const len = time.toString().length;
        if (len === 10) {
            time *= 1000;
        }
    }
    const date = new Date(time);
    const formatTypes = {
        y: date.getFullYear(),
        M: date.getMonth(),
        d: date.getDate(),
        H: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
    };
    let res = format;
    for (const key in formatTypes) {
        if (Object.prototype.hasOwnProperty.call(formatTypes, key)) {
            let value = formatTypes[key];
            res = res.replace(new RegExp(key + "+"), (0, keepDigits_1.default)(value, 2));
        }
    }
    return res;
};
exports.default = format;
