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
 * 进制转换 Base conversion
 * @param num { number } 需要转换的数字 Number to be converted
 * @param baseNum { number } 进制数 base number
 * @returns string
 */
const toHex = (num: number, baseNum: number): string | Error => {
  if(baseNum < 2 || baseNum > 36){
    return new Error("Params Error: baseNum is a number from 2-36!")
  }
  let res: string = "";
  let temp: string = String(num);
  const tempArr: string[] = [];
  let continued: boolean = true;
  do {
    if (parseInt(temp) >= baseNum) {
      tempArr.push(getDict(String(parseInt(temp) % baseNum)));
      temp = String(Math.floor(parseInt(temp) / baseNum));
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

export default toHex;
