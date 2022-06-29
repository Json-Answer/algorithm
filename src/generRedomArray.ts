/**
 * 随机生成数组 Randomly generated array
 * @param num 数组元素个数 number of array elements
 * @param interval 元素区间 element interval
 * @param isRepeat 是否允许重复,默认为false Whether to allow repetition, the default is false.
 * @return number[]
 */
const generate = (
  number: number,
  interval: number[] | number,
  isRepeat: boolean = false
): number[] => {
  const res: number[] = [];
  const getItem = (num: number): number | null => {
    if (isRepeat) return num;
    if (res.indexOf(num) === -1) {
      return num;
    }
    return null;
  };
  if (typeof interval === "number" || interval[0] === 0) {
    const inter: number = typeof interval === "number" ? interval : interval[1];
    while (res.length < number) {
      const num: number = Math.round(Math.random() * inter);
      typeof getItem(num) === "number" && res.push(getItem(num) as number);
    }
    return res;
  }
  while (res.length < number) {
    const num: number = Math.round(Math.random() * interval[1]);
    if (num > interval[0]) {
      typeof getItem(num) === "number" && res.push(getItem(num) as number);
    }
  }
  return res;
};

export default generate;
