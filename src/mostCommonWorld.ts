import { DynamicIndex } from "./commonTypes";
import { print } from "./tools";

export interface MostCommonWorldProps {
  paragraph: string;
  banned?: string[];
}

export class MostCommonWord {
  private paragraph: string = "";
  private banned: string[] = [];
  private popular: string = "";
  constructor(props?: MostCommonWorldProps) {
    const { paragraph, banned } = props || {};
    this.setParagraph(paragraph || "");
    this.setBanned(banned || []);
  }
  public setParagraph(paragraph: string) {
    this.paragraph = paragraph;
  }
  public setBanned(banned: string[]) {
    this.banned = banned;
  }
  private setPopular(popular: string) {
    this.popular = popular;
  }
  get() {
    const worlds = this.paragraph.split(" ");
    const newWorlds = this.clearSymbols(worlds);
    const worldObj = this.toObject(newWorlds);
    this.setPopular(this.getPopular(worldObj));
    return this.popular;
  }
  private clearSymbols(worlds: string[]) {
    const symbols: RegExp =
      /[`~!@#$^\-&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g;
    const result: string[] = [];
    worlds.map((item: string) => {
      result.push(item.replace(symbols, ""));
    });
    return result;
  }
  private toObject(worlds: string[]) {
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
  public printProps() {
    print({ paragraph: this.paragraph, banned: this.banned });
  }
}

const mostCommonWord = ({ paragraph, banned }: MostCommonWorldProps) => {
  const method = new MostCommonWord({paragraph, banned});
  return method.get()
};

export default mostCommonWord;