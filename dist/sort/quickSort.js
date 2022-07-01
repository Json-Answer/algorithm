"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 快速排序 Quicksort
 * @param arr { number[] } 数字数组 array of numbers
 * @returns Array<number>
 */
const quickSort = (arr) => {
    const tempArr = [...arr];
    if (arr.length <= 1)
        return arr;
    const kIndex = Math.floor(arr.length / 2);
    const k = tempArr.splice(kIndex, 1)[0];
    const left = [];
    const right = [];
    for (let i = 0, len = tempArr.length; i < len; i++) {
        const item = tempArr[i];
        if (item < k) {
            left.push(item);
            continue;
        }
        right.push(item);
    }
    return [...quickSort(left), k, ...quickSort(right)];
};
exports.default = quickSort;
