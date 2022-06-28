import { DynamicIndex } from "../types/commonTypes";
import { print } from "../tools";

export interface MostCommonWorldProps {
  paragraph: string;
  banned?: string[];
}

/**
 * 获取出现过次数最多的单词 Get the most frequent word
 */
export class MostCommonWord {
  private paragraph: string = "";
  private banned: string[] = [];
  private popular: string = "";
  /**
   * @param props { object } { paragraph: String, banned: String[] }
   */
  constructor(props?: MostCommonWorldProps) {
    const { paragraph, banned } = props || {};
    this.setParagraph(paragraph || "");
    this.setBanned(banned || []);
  }
  public setParagraph(paragraph: string):void {
    this.paragraph = paragraph;
  }
  public setBanned(banned: string[]):void {
    this.banned = banned;
  }
  private setPopular(popular: string):void {
    this.popular = popular;
  }
  public get():string {
    const worlds = this.paragraph.split(" ");
    const newWorlds = this.clearSymbols(worlds);
    const worldObj = this.toObject(newWorlds);
    this.setPopular(this.getPopular(worldObj));
    return this.popular;
  }
  private clearSymbols(worlds: string[]):string[] {
    const symbols: RegExp =
      /[`~!@#$^\-&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g;
    const result: string[] = [];
    worlds.map((item: string) => {
      result.push(item.replace(symbols, ""));
    });
    return result;
  }
  private toObject(worlds: string[]):DynamicIndex {
    const result: DynamicIndex = {};
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
  private getPopular(worlds: DynamicIndex): string {
    const max: { num: number; key?: string } = { num: 0 };
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
  public printProps():void {
    print({ paragraph: this.paragraph, banned: this.banned });
  }
}

/**
 * 获取出现过次数最多的单词 Get the most frequent word
 * @param paragraph string
 * @param banned string[]
 * @returns string
 */
const mostCommonWord = (paragraph: string, banned?: string[]): string => {
  const method = new MostCommonWord({ paragraph, banned });
  return method.get();
};

export default mostCommonWord;
