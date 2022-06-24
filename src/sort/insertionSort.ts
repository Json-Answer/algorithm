/**
 * 插入排序 insertion sort
 * @param arr { number[] } 数字数组 array of numbers
 * @returns Array<number>
 */
const insertionSort = (arr: number[]): number[] => {
  const res: number[] = [...arr];
  const len: number = res.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (res[j] >= res[j - 1]) break;
      const temp: number = res[j - 1];
      res[j - 1] = res[j];
      res[j] = temp;
    }
  }
  return res;
};

export default insertionSort;
