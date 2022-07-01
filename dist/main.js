"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mostCommonWorld_1 = __importDefault(require("./leetCode/mostCommonWorld"));
const tools_1 = require("./tools");
const dateFormat_1 = __importDefault(require("./dateFormat"));
const unique_1 = __importDefault(require("./unique"));
const toHex_1 = __importDefault(require("./toHex"));
const quickSort_1 = __importDefault(require("./sort/quickSort"));
const insertionSort_1 = __importDefault(require("./sort/insertionSort"));
const bubbleSort_1 = __importDefault(require("./sort/bubbleSort"));
const keepDigits_1 = __importDefault(require("./keepDigits"));
const shuffleAarray_1 = __importDefault(require("./shuffleAarray"));
const flatten_1 = __importDefault(require("./flatten"));
const twoSum_1 = __importDefault(require("./leetCode/twoSum"));
const toFixed_1 = __importDefault(require("./toFixed"));
const generRedomArray_1 = __importDefault(require("./generRedomArray"));
(0, tools_1.print)("hello word");
// 出现次数最多的单词 most frequent word
(0, tools_1.print)("出现次数最多的单词 most frequent word");
const paragraphData = {
    paragraph: "Bob hit a ball, the hit BALL flew far after it was hit.",
    banned: ["hit"],
};
(0, tools_1.print)((0, mostCommonWorld_1.default)(paragraphData.paragraph, paragraphData.banned));
// result: ball
// 保留有效整数 keep valid integers
(0, tools_1.print)("保留有效整数 keep valid integers");
(0, tools_1.print)((0, keepDigits_1.default)(8, 4));
// result: 0008
// 时间格式化 time formatting
(0, tools_1.print)("时间格式化 time formatting");
(0, tools_1.print)((0, dateFormat_1.default)(new Date()));
// 数组去重 Array unique
(0, tools_1.print)("数组去重 Array unique");
(0, tools_1.print)((0, unique_1.default)([{ a: 1 }, { a: 1, b: { a: 1 } }], "a"));
// result: [ { a: 1, b: { a: 1 } } ]
// 进制转换 base conversion
(0, tools_1.print)("进制转换 base conversion");
(0, tools_1.print)((0, toHex_1.default)("4b0", 2, 16));
// result: 10010110000
// 时间校准 time calibration
// const startTime = new Date().getTime() + 60 * 1000 * 2
// print(`开始时间${format(startTime)}`);
// const time = new timeCheck({
//   time: startTime,
//   clockTime: startTime + 1000*5,
//   clockCallback: (second: number) => {
//     print(`${(second - startTime) / 1000}秒钟过去了,现在是${format(second)}`);
//   },
// });
// time.setClockTime(startTime + 1000 * 7)
// time.sleep((time:number)=> {
//   print(`现在是${format(time)}`,time);
// },1)
// time.sleep((time:number)=> {
//   print(`2s一次现在是${format(time)}`);
// },2)
// setTimeout(() => {
//   time.clear();
//   print(`定时器清除,现在是${format(time.getTime())}`)
// }, 1000*10);
// 延迟执行 delayed execution
// (async function(){
//   print('进入');
//   delay(2000,print('我先进来了'))
//   print('我想先进入')
// })()
// 快速排序 Qicksort
(0, tools_1.print)("快速排序 Qicksort");
const arr = [3, 1, 5, 9, 4, 2, 8];
(0, tools_1.print)((0, quickSort_1.default)(arr));
// result: [ 1, 2, 3, 4, 5, 8, 9]
// 冒泡排序 Bubble sort
(0, tools_1.print)("冒泡排序 Bubble sort");
(0, tools_1.print)((0, bubbleSort_1.default)(arr));
// result: [ 1, 2, 3, 4, 5, 8, 9]
// 插入排序 insertion sort
(0, tools_1.print)("插入排序 insertion sort");
(0, tools_1.print)((0, insertionSort_1.default)(arr));
// result: [ 1, 2, 3, 4, 5, 8, 9]
// 打乱数组 Shuffle the array
(0, tools_1.print)("打乱数组 Shuffle the array");
(0, tools_1.print)((0, shuffleAarray_1.default)(arr));
// 随机生成数组 Randomly generated array
(0, tools_1.print)("随机生成数组 Randomly generated array");
const arr1 = (0, generRedomArray_1.default)(10, [3, 20]);
(0, tools_1.print)(arr1);
// 数组扁平化 Array flattening
(0, tools_1.print)("数组扁平化 Array flattening");
(0, tools_1.print)((0, flatten_1.default)([1, 2, 3, [1, 2]]));
// result: [ 1, 2, 3, 1, 2 ]
// 根据结构查找数组位置 Find array location based on structure
(0, tools_1.print)("根据结构查找数组位置 Find array location based on structure");
(0, tools_1.print)((0, twoSum_1.default)([2, 7, 11, 15], 18));
// result: [1, 2]
// 保留小数位数 Preserve decimal places.
(0, tools_1.print)("保留小数位数 Preserve decimal places.");
(0, tools_1.print)((0, toFixed_1.default)(10.2881, 2));
// result: "10.29"
