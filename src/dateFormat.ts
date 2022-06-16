import { DynamicIndex } from "./commonTypes";
import keepDigits from "./keepDigits";

/**
 *
 * @param time { number | Date | string } 时间戳 | 时间 | 时间字符串 timestamp | time | timestring
 * @param format { string } 格式-默认为yyyy-MM-dd HH:mm:ss Format-default is yyyy-MM-dd HH:mm:ss
 * @returns string
 */
const format = (
  time: number | Date | string,
  format: string = "yyyy-MM-dd HH:mm:ss"
) => {
  if (typeof time === "number") {
    const len: number = time.toString().length;
    if (len === 10) {
      time *= 1000;
    }
  }
  const date: Date = new Date(time);
  const formatTypes: DynamicIndex = {
    y: date.getFullYear(),
    M: date.getMonth(),
    d: date.getDate(),
    H: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
  };
  let res: string = format;
  for (const key in formatTypes) {
    if (Object.prototype.hasOwnProperty.call(formatTypes, key)) {
      let value = formatTypes[key];
      res = res.replace(new RegExp(key + "+"), keepDigits(value, 2));
    }
  }
  return res;
};

export default format;
