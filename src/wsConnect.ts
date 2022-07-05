/**
 * websocket
 */
class WsConnect {
  private url: string = "";
  private instance: WebSocket | null = null;
  private initiativeClose: boolean = false;
  constructor(url: string) {
    this.url = url;
    this.connect();
  }
  private connect() {
    this.instance = new WebSocket(this.url);
    this.instance.onclose = () => {
      if (!this.initiativeClose) {
        setTimeout(() => {
          this.connect();
        }, 2000);
      }
    };
  }
  public onOpen() {
    return this.instance?.onopen;
  }
  public onClose() {
    return this.instance?.onclose;
  }
  public onMessage() {
    return this.instance?.onclose;
  }
  public onError() {
    return this.instance?.onerror;
  }
  /**
   * 断开重连 Disconnect and reconnect
   */
  public reconnect() {
    this.initiativeClose = true;
    this.close();
    this.connect();
  }
  public close() {
    this.initiativeClose = true;
    this.instance?.close();
  }
  public send(data: string) {
    return this.instance?.send(data);
  }
}

export default WsConnect;
