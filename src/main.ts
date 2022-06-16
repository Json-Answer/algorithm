import worldPop,{ MostCommonWord } from "./mostCommonWorld"
import { print } from "./tools"
import format from './dateFormat'

print('hello word')

const paragraphData = {paragraph: "Bob hit a ball, the hit BALL flew far after it was hit.",banned: [""]}

print(format(new Date()))
print(worldPop(paragraphData.paragraph,paragraphData.banned))