// 字典A-Z
const dict: string[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "k",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

/**
 * 10进制转换成2-36进制 Base conversion
 * @param num { number } 需要转换的数字 Number to be converted
 * @param targetBaseNum { number } 目标进制数 target base number
 * @returns string
 */
export const tenToOthers = (num: number, targetBaseNum: number): string => {
  let res: string = "";
  let temp: string = String(num);
  const tempArr: string[] = [];
  let continued: boolean = true;
  do {
    if (parseInt(temp) >= targetBaseNum) {
      tempArr.push(getDict(String(parseInt(temp) % targetBaseNum)));
      temp = String(Math.floor(parseInt(temp) / targetBaseNum));
    } else {
      tempArr.push(getDict(temp));
      continued = false;
    }
  } while (continued);
  do {
    res += tempArr.pop();
  } while (tempArr.length);
  return res;
};

/**
 * 2-36进制转换成10进制 Base conversion
 * @param num { number } 需要转换的数字 Number to be converted
 * @param sourceBaseNum { number } 原始进制数 source base number
 * @returns number
 */
export const othersToTen = (num: string, sourceBaseNum: number): number => {
  let res: number = 0;
  const tempArr: string[] = num.split("");
  const resArr: number[] = [];
  for (let i = 0, len = tempArr.length; i < len; i++) {
    const item = tempArr[i];
    if (dict.indexOf(item.toUpperCase()) === -1) {
      resArr.unshift(parseInt(item));
      continue;
    }
    resArr.unshift(dictToNum(item));
  }
  for (let i = 0, len = resArr.length; i < len; i++) {
    const item = resArr[i];
    res += item * sourceBaseNum ** i;
  }
  return res;
};
/**
 * 获取数字对应的字典 Get the dictionary corresponding to the number
 * @param num { string } 需要判断的数字,字符串类型 Number to be judged, string type.
 * @returns string
 */
const getDict = (num: string): string => {
  if (parseInt(num) > 10) {
    const index: number = parseInt(num) % 10;
    return dict[index];
  }
  return num;
};

/**
 * 字符获取对应的进制数字 Character to get the corresponding base number.
 * @param word { string } 单词 word
 * @returns string
 */
const dictToNum = (word: string): number => {
  return dict.indexOf(word.toUpperCase()) + 10;
};

/**
 * 进制转换 Base conversion
 * @param num { number } 需要转换的数字 Number to be converted
 * @param targetBaseNum { number } 目标进制数 target base number
 * @param sourceBaseNum { number } 原始进制数,默认为10 source base number, default is 10
 * @returns string | number
 */
const toHex = (
  num: number | string,
  targetBaseNum: number,
  sourceBaseNum: number = 10
): string | Error | number => {
  let res: string = "";
  if (
    targetBaseNum < 2 ||
    targetBaseNum > 36 ||
    sourceBaseNum < 2 ||
    sourceBaseNum > 36
  )
    return new Error("Params Error: baseNum is a number from 2-36!");
  if (sourceBaseNum === 10) {
    if (typeof num === "string") num = parseInt(num);
    return tenToOthers(num, targetBaseNum);
  }
  if (targetBaseNum === 10) {
    if (typeof num === "number") num = num.toString();
    return othersToTen(num, sourceBaseNum);
  }
  if (typeof num === "number") {
    num = num.toString();
  }
  const temp: number = othersToTen(num, sourceBaseNum);
  res = tenToOthers(temp, targetBaseNum);
  return res;
};
export default toHex;
