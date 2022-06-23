import worldPop, { MostCommonWord } from "./mostCommonWorld";
import { print } from "./tools";
import format from "./dateFormat";
import unique from "./unique";
import toHex from "./toHex";
import timeCheck from "./timeSynchronization";
import delay from "./delay";
import QuickSort from "./quickSort";
import insertionSort from "./insertionSort";
import bubbleSort from "./bubbleSort";

print("hello word");

// 出现次数最多的单词 most frequent word
const paragraphData = {
  paragraph: "Bob hit a ball, the hit BALL flew far after it was hit.",
  banned: ["hit"],
};
print(worldPop(paragraphData.paragraph, paragraphData.banned));
// result: ball

// 时间格式化 time formatting
print(format(new Date()));
// result: 2022-05-19 00:26:11

// 数组去重 Array unique
print(unique([{ a: 1 }, { a: 1, b: { a: 1 } }], "a"));
// result: [ { a: 1, b: { a: 1 } } ]

// 进制转换 base conversion
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
