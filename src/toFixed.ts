/**
 * 保留小数位数 Preserve decimal places.
 * @param number { number } 需要转换的数字 source
 * @param num { number } 小数位数 decimal places
 * @return string
 */
const toFixed = (number: number | string, num: number): string => {
  let temp: number = number as number;
  const unit: number = 10 ** num;
  if (typeof number === "string") {
    temp = Number(number);
  }
  temp = Math.round(temp * unit) / unit;
  
  const arr: any[] = temp.toString().split(".");
  if (arr.length === 1) {
    arr.push(".");
    for (let i = 0; i < num; i++) {
      arr.push(0);
    }
    return arr.join("");
  }
  const decimal:string = arr.pop();
  arr.push(".")
  const dArr:string[] = decimal.split("");
  for (let i = 0, time = num - dArr.length; i < time; i++) {
    dArr.push("0");
  }
  return arr.join("")+dArr.join("");
};

export default toFixed;
