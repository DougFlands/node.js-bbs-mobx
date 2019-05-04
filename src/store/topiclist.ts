import { observable } from 'mobx'
import api from '../utils/api'

const topiclistStore = observable({
  page: 1,
  limit: 20,
  list: [],
  topicinfo: {},
  replies: [],
  getTopicList(params: any, changeTag?: boolean) {
    api.gettopics(params).then(data => {
      if (data.data && data.data.length > 0) {
        this.page = params.page
        if (changeTag) {
          // 有此字段表示选择tag
          this.list = data.data
        } else {
          this.list.push(...data.data)
        }
      }
    })
  },
  getTopicInfo(params: any) {
    this.topicinfo = {}
    this.replies = []
    api.gettopicinfo(params).then(data => {
      if (data.data) {
        this.replies = data.data.replies
        this.topicinfo = { ...data.data, replies: null }
      } else {
        console.log('请求详情失败');
      }
    })
  }
})
export default topiclistStore
