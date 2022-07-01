/**
 * 判断是否对象是否是空对象 Determine if an object is an empty object.
 * @param obj { object }
 * @returns boolean
 */
const isEmptyObject = (obj: object): boolean => {
  return JSON.stringify(obj) === "{}";
};

export default isEmptyObject;
