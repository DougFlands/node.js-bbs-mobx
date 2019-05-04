import request from './request';

const api = {
  // 主题首页
  gettopics(data:Object):Promise<any> {
    // console.log(request);
    return request.get('topics', data)
  },
  // 主题详情
  gettopicinfo(id:String):Promise<any> {
    return request.get(`topic/${id}`)
  },
  // 获取用户信息
  getuseinfo(loginname:String, data?:Object):Promise<any> {
    return request.get(`user/${loginname}`, data)
  },
}


export default api