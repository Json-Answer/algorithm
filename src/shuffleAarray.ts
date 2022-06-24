/**
 * 打乱数组 Shuffle the array
 * @param arr { number[] } 数组 array
 * @returns Array<number>
 */
const shuffleArray = (arr: number[]) => {
  const res: number[] = [];
  const newArr: number[] = [...arr];
  while (newArr.length > 0) {
    const len: number = newArr.length - 1;
    const index: number = Math.round(Math.random() * len);
    const item: number = newArr.splice(index, 1)[0];
    res.push(item);
  }
  return res;
};

export default shuffleArray;
