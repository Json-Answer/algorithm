/**
 * 快速排序 Quicksort
 * @param arr { number[] } 数字数组 array of numbers
 * @returns Array<number>
 */
const quickSort = (arr: number[]): number[] => {
  const tempArr:number[] = [...arr]
  if (arr.length <= 1) return arr;
  const kIndex: number = Math.floor(arr.length / 2);
  const k: number = tempArr.splice(kIndex, 1)[0];
  const left: number[] = [];
  const right: number[] = [];
  for (let i = 0, len = tempArr.length; i < len; i++) {
    const item: number = tempArr[i];
    if (item < k) {
      left.push(item);
      continue;
    }
    right.push(item);
  }
  return [...quickSort(left), k, ...quickSort(right)];
};

export default quickSort;
