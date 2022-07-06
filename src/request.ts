import { DynamicIndex } from "./types/commonTypes";

// application/x-www-form-urlencoded、multipart/form-data
const commonHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json;charset=UTF-8",
  "X-Requested-With": "XMLHttpRequest",
};

const typeReg: RegExp = new RegExp("application/x-www-form-urlencoded+");

const useUrl =
  process.env.NODE_ENV === "development" ? "" : "正式地址 official address";

interface OptionProps {
  headers?: any;
  method?: string;
  data?: DynamicIndex;
  timeout?: number;
}

let reqNum: number = 0;

const setLoading = (): void => {
  if (!reqNum) {
    // 加载动画 loading
  }
  reqNum++;
};

const clearLoading = (): void => {
  if (reqNum > 0) {
    reqNum--;
  }
  if (reqNum === 0) {
    // 清除加载动画 clear loading
  }
};

const controller = new AbortController();
const signal = controller.signal;
/**
 * 请求 request
 * @param url { string }
 * @param option { object } headers, method, data
 * @returns
 */
const request = (url: string, option?: OptionProps): Promise<void> =>
  new Promise<void>(async (resolve, reject) => {
    setLoading();
    const headers: DynamicIndex = {
      ...commonHeaders,
      ...(option?.headers || {}),
    };
    let params: DynamicIndex | string | null = { ...(option?.data || {}) };
    const timeout: number = option?.timeout || 9999999;
    const method: string = option?.method ? option.method.toUpperCase() : "GET";
    if (typeReg.test(headers["Content-Type"]) && method !== "GET") {
      params = qs.stringify(params as object);
    }
    if (method.toUpperCase() === "GET") {
      url += `?${qs.stringify(params as object)}`;
      params = null;
    }
    try {
      const res: any = await Promise.race([
        fetch(`${useUrl}${url}`, {
          method,
          headers,
          body: params as BodyInit,
          mode: "cors",
          signal,
        }),
        timeoutPromise(timeout),
      ]);
      clearLoading();
      if (res.status === 200) {
        resolve(await res.json());
        return;
      }
      reject(res.statusText);
    } catch (error) {
      clearLoading();
      new Error(error as any);
    }
  });

const timeoutPromise = (timeout: number) =>
  new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: 504, statusText: "timeout" } as any);
      controller.abort();
      return;
    }, timeout);
  });
export default request;

export const post = (url: string, data: DynamicIndex): Promise<void> =>
  request(url, { data, method: "POST" });

export const get = (url: string, data: DynamicIndex): Promise<void> =>
  request(url, { data, method: "POST" });

// 上传文件 upload
export const upload = (data: DynamicIndex) => {
  const url: string = "";
  let params: FormData = new FormData();
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];
      params.append(key, value);
    }
  }
  return request(url, {
    data: params,
    headers: "multipart/form-data;charset=UTF-8",
  });
};

// 数据格式化 data formatting
export class qs {
  static stringify(data: DynamicIndex): string {
    let res: string = "";
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const value = data[key];
        res += `${key}=${value}&`;
      }
    }
    return res.substring(0, res.length - 1);
  }
  static parse(data: string): Object {
    const res: DynamicIndex = {};
    const dataArr: string[] = data.split("&");
    for (let i = 0, len = dataArr.length; i < len; i++) {
      const item: string = dataArr[i];
      const key: string = item.split("=")[0];
      const value: string = item.split("=")[1];
      res[key] = value;
    }
    return res;
  }
}
