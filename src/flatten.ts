/**
 * 数组扁平化 Array flattening
 * @param arr { any[] } 数组 Array<any>
 * @returns Array<any>
 */
const flatten = (arr: any[]): any[] => {
  const res: any[] = [...arr];
  for (let i = 0, len = arr.length; i < len; i++) {
    const item: any = arr[i];
    if (Array.isArray(item)) {
      res.splice(i, 1, ...item);
    }
  }
  return res;
};

export default flatten;
