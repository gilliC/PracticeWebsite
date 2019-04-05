import axios from 'axios';

export default class ConnectServer {
  constructor() {
    this.url = 'http://localhost:1617/';
  }

  async getColorConverterReq(color, type) {
    let requestUrl =
      this.url + 'colorConverting/' + type + '/' + color.substring(1);
    const res = await axios.get(requestUrl);
    let {data} = await res;
    if (data) {
      if (data.status === 'SUCCEED') return data.value;
      else return data;
    }
    const error = {error: 'res.data is undefined'};
    throw error;
  }
  async getBookmark() {
    let requestUrl = this.url + 'bookmark/getAll';
    const res = await axios.get(requestUrl);
    let {data} = await res;
    if (data) {
      if (data.status === 'SUCCEED') return data.value;
      else return data;
    }
    const error = {error: 'res.data is undefined'};
    throw error;
  }
}
