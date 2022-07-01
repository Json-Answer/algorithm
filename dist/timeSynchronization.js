"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 同步时间,使用场景: 当自己电脑时间和服务器时间不同时,校正时间和添加定时任务可用
 * Synchronize time, usage scenarios: When your computer time is different from the server time, correct time and add timed tasks are available.
 */
class TimeSynchronization {
    constructor({ time, clockTime, clockTimeArr, clockCallback, sleep, sleepArr, }) {
        this.time = 0;
        this.clockTime = [];
        this.interval = null;
        this.clockCallback = null;
        this.sleepArr = [];
        this.setSleepArr = (arr) => {
            const res = [];
            for (let i = 0, len = arr.length; i < len; i++) {
                const item = arr[i];
                res.push(Object.assign(Object.assign({}, item), { sleepNum: 0 }));
            }
        };
        !!time && this.setTime(time);
        !!clockTime && this.setClockTime(clockTime);
        !!clockTimeArr && this.setClockTimeArr(clockTimeArr);
        !!clockCallback && this.setClockCallback(clockCallback);
        !!sleep && this.sleep(sleep.callback, sleep.second);
        !!sleepArr && this.setSleepArr(sleepArr);
    }
    start() {
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
    setTime(time) {
        this.clear();
        this.time = this.formatTime(time);
        this.start();
    }
    /**
     * 设置闹钟时间,可以是时间戳,可以是时间字符串,也可以是时间类型
     * Set the alarm time, which can be a timestamp, a time string, or a time type.
     * @param time { number | Date | string } 闹钟时间 alarm time
     */
    setClockTime(time) {
        time = this.formatTime(time);
        if (this.clockTime.indexOf(time) === -1) {
            this.clockTime.push(time);
        }
    }
    /**
     * 设置闹钟时间数组
     * @param clockArr { Array } 闹钟时间数组 Array of alarm times
     */
    setClockTimeArr(clockArr) {
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
    setClockCallback(callback) {
        this.clockCallback = callback;
    }
    formatTime(time) {
        if (typeof time === "number") {
            const len = time.toString().length;
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
    getTime() {
        return this.time;
    }
    /**
     * 关闭定时器 off timer
     */
    clear() {
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
    sleep(callback, second) {
        this.sleepArr.push({ second: second, callback: callback, sleepNum: 0 });
    }
}
exports.default = TimeSynchronization;
