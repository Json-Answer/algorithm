"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MostCommonWord = void 0;
const tools_1 = require("../tools");
/**
 * 获取出现过次数最多的单词 Get the most frequent word
 */
class MostCommonWord {
    /**
     * @param props { object } { paragraph: String, banned: String[] }
     */
    constructor(props) {
        this.paragraph = "";
        this.banned = [];
        this.popular = "";
        const { paragraph, banned } = props || {};
        this.setParagraph(paragraph || "");
        this.setBanned(banned || []);
    }
    setParagraph(paragraph) {
        this.paragraph = paragraph;
    }
    setBanned(banned) {
        this.banned = banned;
    }
    setPopular(popular) {
        this.popular = popular;
    }
    get() {
        const worlds = this.paragraph.split(" ");
        const newWorlds = this.clearSymbols(worlds);
        const worldObj = this.toObject(newWorlds);
        this.setPopular(this.getPopular(worldObj));
        return this.popular;
    }
    clearSymbols(worlds) {
        const symbols = /[`~!@#$^\-&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g;
        const result = [];
        worlds.map((item) => {
            result.push(item.replace(symbols, ""));
        });
        return result;
    }
    toObject(worlds) {
        const result = {};
        for (let i = 0, len = worlds.length; i < len; i++) {
            const key = worlds[i].toLowerCase();
            if (Object.keys(result).indexOf(key) === -1) {
                result[key] = 1;
                continue;
            }
            result[key]++;
        }
        return result;
    }
    getPopular(worlds) {
        const max = { num: 0 };
        for (const key in worlds) {
            if (Object.prototype.hasOwnProperty.call(worlds, key)) {
                const value = worlds[key];
                if (value > max.num && this.banned.indexOf(key) === -1) {
                    max.num = value;
                    max.key = key;
                }
            }
        }
        return max.key || "";
    }
    printProps() {
        (0, tools_1.print)({ paragraph: this.paragraph, banned: this.banned });
    }
}
exports.MostCommonWord = MostCommonWord;
/**
 * 获取出现过次数最多的单词 Get the most frequent word
 * @param paragraph string
 * @param banned string[]
 * @returns string
 */
const mostCommonWord = (paragraph, banned) => {
    const method = new MostCommonWord({ paragraph, banned });
    return method.get();
};
exports.default = mostCommonWord;
