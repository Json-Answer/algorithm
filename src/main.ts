import worldPop, { MostCommonWord } from "./leetCode/mostCommonWorld";
import { print } from "./tools";
import format from "./dateFormat";
import unique from "./unique";
import toHex from "./toHex";
import timeCheck from "./timeSynchronization";
import delay from "./delay";
import QuickSort from "./sort/quickSort";
import insertionSort from "./sort/insertionSort";
import bubbleSort from "./sort/bubbleSort";
import keepDigits from "./keepDigits";
import shuffleArray from "./shuffleAarray";
import flatten from "./flatten";
import twoSum from "./leetCode/twoSum";
import toFixed from "./toFixed";
import generate from "./generRedomArray";
import isEmptyObject from "./isEmptyObject";

print("hello word");

// 出现次数最多的单词 most frequent word
print("出现次数最多的单词 most frequent word");
const paragraphData = {
  paragraph: "Bob hit a ball, the hit BALL flew far after it was hit.",
  banned: ["hit"],
};
print(worldPop(paragraphData.paragraph, paragraphData.banned));
// result: ball

// 保留有效整数 keep valid integers
print("保留有效整数 keep valid integers");
print(keepDigits(8, 4));
// result: 0008

// 时间格式化 time formatting
print("时间格式化 time formatting");
print(format(new Date()));

// 数组去重 Array unique
print("数组去重 Array unique");
print(unique([{ a: 1 }, { a: 1, b: { a: 1 } }], "a"));
// result: [ { a: 1, b: { a: 1 } } ]

// 进制转换 base conversion
print("进制转换 base conversion");
print(toHex("4b0", 2, 16));
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
print("快速排序 Qicksort");
const arr = [3, 1, 5, 9, 4, 2, 8];
print(QuickSort(arr));
// result: [ 1, 2, 3, 4, 5, 8, 9]

// 冒泡排序 Bubble sort
print("冒泡排序 Bubble sort");
print(bubbleSort(arr));
// result: [ 1, 2, 3, 4, 5, 8, 9]

// 插入排序 insertion sort
print("插入排序 insertion sort");
print(insertionSort(arr));
// result: [ 1, 2, 3, 4, 5, 8, 9]

// 打乱数组 Shuffle the array
print("打乱数组 Shuffle the array");
print(shuffleArray(arr));

// 随机生成数组 Randomly generated array
print("随机生成数组 Randomly generated array");
const arr1: number[] = generate(10, [3, 20]);
print(arr1);

// 数组扁平化 Array flattening
print("数组扁平化 Array flattening");
print(flatten([1, 2, 3, [1, 2]]));
// result: [ 1, 2, 3, 1, 2 ]

// 根据结构查找数组位置 Find array location based on structure
print("根据结构查找数组位置 Find array location based on structure");
print(twoSum([2, 7, 11, 15], 18));
// result: [1, 2]

// 保留小数位数 Preserve decimal places.
print("保留小数位数 Preserve decimal places.");
print(toFixed(10.2881, 2));
// result: "10.29"

// 判断是否对象是否是空对象 Determine if an object is an empty object.
print("判断是否对象是否是空对象 Determine if an object is an empty object.");
print(isEmptyObject({}));
// result: true
