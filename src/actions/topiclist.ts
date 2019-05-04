import api from '../utils/api';

export function getTopicList(params:any, changeTag?: boolean) {
  return dispatch => {
    api.gettopics(params).then(data => {
      if (data.data && data.data.length > 0) {
        dispatch({ type: 'GET_TOPIC_LIST', list: data.data, page: params.page, tab: params.tab, changeTag })
      }
    })
  }
}

export function getTopicInfo(params:any) {
  return dispatch => {
    dispatch({ type: 'GET_TOPIC_INFO', infoData: null })
    api.gettopicinfo(params).then(data => {
      if (data.data) {
        dispatch({ type: 'GET_TOPIC_INFO', infoData: data.data })
      } else {
        console.log('请求详情失败');
      }
    })
  }
}