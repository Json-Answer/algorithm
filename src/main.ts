import worldPop, { MostCommonWord } from "./mostCommonWorld";
import { print } from "./tools";
import format from "./dateFormat";
import unique from "./unique";
import toHex from "./toHex";
import timeCheck from "./timeSynchronization";

print("hello word");

const paragraphData = {
  paragraph: "Bob hit a ball, the hit BALL flew far after it was hit.",
  banned: ["hit"],
};
print(worldPop(paragraphData.paragraph, paragraphData.banned));
// result: ball

print(format(new Date()));
// result: 2022-05-19 00:26:11

print(unique([{ a: 1 }, { a: 1, b: { a: 1 } }], "a"));
// result: [ { a: 1, b: { a: 1 } } ]

print(toHex("4b0", 2, 16));
// result: 10010110000

const startTime = new Date().getTime() + 60 * 1000 * 2
print(`开始时间${format(startTime)}`);
const time = new timeCheck({
  time: startTime,
  clockTime: startTime + 1000*5,
  clockCallback: (second: number) => {
    print(`${(second - startTime) / 1000}秒钟过去了,现在是${format(second)}`);
  },
});

time.setClockTime(startTime + 1000 * 7)
time.sleep((time:number)=> {
  print(`现在是${format(time)}`,time);
},1)
time.sleep((time:number)=> {
  print(`2s一次现在是${format(time)}`);
},2)

setTimeout(() => {
  time.clear();
  print(`定时器清除,现在是${format(time.getTime())}`)
}, 1000*10);
