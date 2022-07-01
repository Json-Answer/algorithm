"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 延迟 delay
 * @param millisecond { number } 注: 单位为毫秒 Note: The unit is in milliseconds!
 * @param priorityFun { Function } 优先执行的内容 Priority content
 * @returns Promise
 */
const delay = (millisecond, priorityFun) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            priorityFun && priorityFun();
            resolve();
        }, millisecond);
    });
};
exports.default = delay;
