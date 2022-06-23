import { DynamicIndex } from "./types/commonTypes";

/**
 * 数组去重,可以去重对象数组,也可根据对象某个键值来去重 Array deduplication, you can deduplicate the object array, or you can deduplicate according to a certain key value of the object
 * @param array { Array } 数组 Array
 * @param indexKey { string } 键名,对象数组去重可选,如果传值选择相同值最后一个值作为结果,否则正常去重 Key name, object array deduplication is optional, if the value is passed, select the last value of the same value as the result, otherwise deduplication normally
 * @returns Array
 */
const unique = <T>(array: T[], indexKey?: string): T[] => {
  if (typeof array[0] !== "object") {
    return Array.from(new Set(array));
  }
  const tempObject: DynamicIndex = {};
  const res: any[] = [];
  if (!indexKey) {
    array.map((item: T) => {
      const key = JSON.stringify(item);
      tempObject[key] = 0;
    });
    for (const key in tempObject) {
      if (Object.prototype.hasOwnProperty.call(tempObject, key)) {
        res.push(JSON.parse(key));
      }
    }
    return res;
  }
  array.map((item: DynamicIndex) => {
    const key = item[indexKey];
    tempObject[key] = item;
  });
  for (const key in tempObject) {
    if (Object.prototype.hasOwnProperty.call(tempObject, key)) {
      const item = tempObject[key];
      res.push(item);
    }
  }
  return res;
};

export default unique;
