import worldPop, { MostCommonWord } from "./mostCommonWorld";
import { print } from "./tools";
import format from "./dateFormat";
import unique from "./unique";
import toHex from './toHex';

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

print(toHex(1200,2))
// result: 10010110000
