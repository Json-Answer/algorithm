"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 数组扁平化 Array flattening
 * @param arr { any[] } 数组 Array<any>
 * @returns Array<any>
 */
const flatten = (arr) => {
    const res = [...arr];
    for (let i = 0, len = arr.length; i < len; i++) {
        const item = arr[i];
        if (Array.isArray(item)) {
            res.splice(i, 1, ...item);
        }
    }
    return res;
};
exports.default = flatten;
