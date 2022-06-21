/**
 * 延迟 delay
 * @param millisecond { number } 注: 单位为毫秒 Note: The unit is in milliseconds!
 * @param priorityFun { Function } 优先执行的内容 Priority content
 * @returns Promise
 */
const delay = (millisecond: number, priorityFun?: Function | void) => {
  return new Promise((resolve: any, reject: any) => {
    setTimeout(() => {
      priorityFun && priorityFun();
      resolve();
    }, millisecond);
  });
};

export default delay;
