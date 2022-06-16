/**
 * 保留整数有效数字位
 * @param number { number }
 * @param digital { number } 保留位数 number of digits
 * @returns string
 */
const keepDigits = (number: number, digital: number = 2): string => {
  let res: string = number.toString();
  const zeroNum = digital - res.length;
  for (let i = 0; i < zeroNum; i++) {
    res = `0${res}`;
  }
  return res;
};

export default keepDigits;
