import Taro from '@tarojs/taro';

const rootPath = 'https://cnodejs.org/api/v1/'

const request = {
  get(url:String, data?:Object) {
    Taro.showLoading()
    return Taro.request({
      url: `${rootPath}${url}`,
      data,
      method: 'GET',
      dataType: 'json',
      header: {
        'content-type': 'application/json'
      }
    }).then(data => {
      Taro.hideLoading()
      return data.data
    }).catch(data => {
      return data
    })
  },
  post(url:String, data?:Object) {
    return Taro.request({
      url: `${rootPath}${url}`,
      data,
      method: 'GET',
      dataType: 'json',
      header: {
        'content-type': 'application/json'
      }
    }).then(data => {
      return data.data
    }).catch(data => {
      return data
    })
  }
}

export default request


