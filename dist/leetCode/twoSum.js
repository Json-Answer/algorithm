"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 给定一个整数数组 nums 和一个整数目标值 target,请你在该数组中找出 和为目标值 target 的那两个整数,并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是,数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 * Given an integer array nums and an integer target value target, please find the two integers in the array that are the target value target and return their array indices.
 * You can assume that there will only be one answer for each input. However, the same element in the array cannot be repeated in the answer.
 * You can return answers in any order.
 * @param arr { number[] } 不重复数组
 * @param target index[]
 */
const twoSum = (arr, target) => {
    const res = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        const diff = target - arr[i];
        const diffIndex = arr.indexOf(diff);
        if (diffIndex === -1)
            continue;
        res.push(i, diffIndex);
        break;
    }
    return res;
};
exports.default = twoSum;
