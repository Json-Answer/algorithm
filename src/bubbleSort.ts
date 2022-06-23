/**
 * 冒泡排序 Bubble sort
 * @param arr { number[] } 数字数组 array of numbers
 * @returns Array<number>
 */
const bubbleSort = (arr: number[]): number[] => {
  const res:number[] = [...arr];
  const len: number = res.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (res[j] > res[j + 1]) {
        const temp: number = res[j + 1];
        res[j + 1] = res[j];
        res[j] = temp;
      }
    }
  }
  return res;
};

export default bubbleSort;
