"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 打乱数组 Shuffle the array
 * @param arr { number[] } 数组 array
 * @returns Array<number>
 */
const shuffleArray = (arr) => {
    const res = [];
    const newArr = [...arr];
    while (newArr.length > 0) {
        const len = newArr.length - 1;
        const index = Math.round(Math.random() * len);
        const item = newArr.splice(index, 1)[0];
        res.push(item);
    }
    return res;
};
exports.default = shuffleArray;
