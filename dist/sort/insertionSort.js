"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 插入排序 insertion sort
 * @param arr { number[] } 数字数组 array of numbers
 * @returns Array<number>
 */
const insertionSort = (arr) => {
    const res = [...arr];
    var len = res.length;
    for (let i = 1; i < len; i++) {
        let p = i - 1;
        const current = res[i];
        while (p >= 0 && res[p] > current) {
            res[p + 1] = res[p];
            p--;
        }
        res[p + 1] = current;
    }
    return res;
};
exports.default = insertionSort;
