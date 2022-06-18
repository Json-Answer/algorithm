import worldPop, { MostCommonWord } from "./mostCommonWorld";
import { print } from "./tools";
import format from "./dateFormat";
import unique from "./unique";
import toHex from './toHex';

print("hello word");

const paragraphData = {
  paragraph: "Bob hit a ball, the hit BALL flew far after it was hit.",
  banned: [""],
};
print(worldPop(paragraphData.paragraph, paragraphData.banned));

print(format(new Date()));

print(unique([{ a: 1 }, { a: 1, b: { a: 1 } }], "a"));

print(toHex(1200,2))
