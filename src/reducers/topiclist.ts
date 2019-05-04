import { ITopiclisttype } from '../interfaces/reducers'

const TOPIC_STATE = {
  page: 1,
  limit: 20,
  list: [],
  topicinfo: {},
  replies: []
}

export default function topicList(state = TOPIC_STATE, action: ITopiclisttype) {
  let copyState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'GET_TOPIC_LIST':
      copyState.page = action.page
      if (action.changeTag) {
        // 有此字段表示选择tag
        copyState.list = action.list
      } else {
        copyState.list.push(...action.list)
      }
      return {
        ...copyState,
      }
    case 'GET_TOPIC_INFO':
      if (action.infoData) {
        copyState.replies = action.infoData.replies
        copyState.topicinfo = { ...action.infoData, replies: null }
      } else {
        // 清空数据
        copyState.topicinfo = {}
        copyState.replies = []
      }
      return {
        ...copyState,
      }
    default:
      return state
  }
};



