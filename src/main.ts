import worldPop,{ MostCommonWord } from "./mostCommonWorld"
import { print } from "./tools"

print('hello word')

const paragraphData = {paragraph: "Bob hit a ball, the hit BALL flew far after it was hit.",banned: ["hit"]}
const mostCommonWord = new MostCommonWord(paragraphData)

print(worldPop(paragraphData))