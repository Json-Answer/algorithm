export type TimeType = number | Date | string;
export interface sleepProps {
  second: number;
  callback: Function;
}
type sleepArrType = (sleepProps & { sleepNum: number })[];
export interface TimeSynchronizationProps {
  time?: TimeType;
  clockTime?: TimeType;
  clockTimeArr?: TimeType[];
  clockCallback?: Function;
  sleep?: sleepProps;
  sleepArr?: sleepProps[];
}

/**
 * 同步时间,使用场景: 当自己电脑时间和服务器时间不同时,校正时间和添加定时任务可用
 * Synchronize time, usage scenarios: When your computer time is different from the server time, correct time and add timed tasks are available.
 */
class TimeSynchronization {
  private time: number = 0;
  private clockTime: number[] = [];
  private interval: NodeJS.Timeout | null = null;
  private clockCallback: Function | null = null;
  private sleepArr: sleepArrType = [];
  constructor({
    time,
    clockTime,
    clockTimeArr,
    clockCallback,
    sleep,
    sleepArr,
  }: TimeSynchronizationProps) {
    !!time && this.setTime(time);
    !!clockTime && this.setClockTime(clockTime);
    !!clockTimeArr && this.setClockTimeArr(clockTimeArr);
    !!clockCallback && this.setClockCallback(clockCallback);
    !!sleep && this.sleep(sleep.callback, sleep.second);
    !!sleepArr && this.setSleepArr(sleepArr);
  }
  private start(): void {
    this.interval = setInterval(() => {
      this.time += 1000;
      if (this.clockTime.indexOf(this.time) !== -1) {
        !!this.clockCallback && this.clockCallback(this.time);
      }
      if (!!this.sleepArr.length) {
        for (let i = 0; i < this.sleepArr.length; i++) {
          const item = this.sleepArr[i];
          item.sleepNum++;
          if (item.sleepNum === item.second) {
            item.sleepNum = 0;
            item.callback(this.time);
          }
        }
      }
    }, 1000);
  }
  /**
   * 设置需要同步的时间
   * @param time { number | Date | string } 设置需要同步时间,可以是时间戳,可以是时间字符串,也可以是时间类型
   */
  public setTime(time: TimeType): void {
    this.clear();
    this.time = this.formatTime(time);
    this.start();
  }
  /**
   * 设置闹钟时间,可以是时间戳,可以是时间字符串,也可以是时间类型
   * Set the alarm time, which can be a timestamp, a time string, or a time type.
   * @param time { number | Date | string } 闹钟时间 alarm time
   */
  public setClockTime(time: TimeType): void {
    time = this.formatTime(time);
    if (this.clockTime.indexOf(time) === -1) {
      this.clockTime.push(time);
    }
  }
  /**
   * 设置闹钟时间数组
   * @param clockArr { Array } 闹钟时间数组 Array of alarm times
   */
  public setClockTimeArr(clockArr: TimeType[]): void {
    this.clockTime = [];
    for (let i = 0, len = clockArr.length; i < len; i++) {
      const item = this.formatTime(clockArr[i]);
      this.clockTime.push(item);
    }
  }
  /**
   * 设置定时器回调,相当于timeout的回调函数
   * Set the timer callback, equivalent to the callback function of timeout
   * @param callback 回调函数 Callback
   */
  public setClockCallback(callback: Function): void {
    this.clockCallback = callback;
  }
  private formatTime(time: TimeType): number {
    if (typeof time === "number") {
      const len: number = time.toString().length;
      if (len === 10) {
        time *= 1000;
      }
    }
    return new Date(time || new Date().getTime()).getTime();
  }
  /**
   * 获取当前时间戳
   * @returns number
   */
  public getTime(): number {
    return this.time;
  }
  /**
   * 关闭定时器 off timer
   */
  public clear(): void {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
      this.clockCallback = null;
      this.sleepArr = [];
    }
  }
  /**
   * 间隔多少秒执行,类似于interval
   * How many seconds to execute, similar to interval
   * @param callback { Function } 回调函数 Callback
   * @param second { number } 注: 该值单位为秒不是毫秒 Note: This value is in seconds, not milliseconds!
   */
  public sleep(callback: Function, second: number): void {
    this.sleepArr.push({ second: second, callback: callback, sleepNum: 0 });
  }
  private setSleepArr = (arr: sleepProps[]): void => {
    const res: sleepArrType = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      const item = arr[i];
      res.push({ ...item, sleepNum: 0 });
    }
  };
}

export default TimeSynchronization;
