/**
 * 生成随机数 generate random numbers
 * @param interval { number | number[] } 范围,如果只有一个值就从0开始 range, starting at 0 if there is only one value
 * @returns number
 */
const random = (interval: number[] | number): number => {
  if (typeof interval === "number" || interval[0] === 0) {
    const inter: number = typeof interval === "number" ? interval : interval[1];
    return Math.round(Math.random() * inter);
  }
  const num: number = Math.round(Math.random() * interval[1]);
  if (num > interval[0]) {
    return num;
  }
  return random(interval);
};

export default random;
