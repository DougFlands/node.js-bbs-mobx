import { IMenutype } from '../interfaces/reducers'

const MENU_STATE = {
  cataData: [
    {
      key: 'all',
      value: '全部',
    },
    {
      key: 'good',
      value: '精华',
    },
    {
      key: 'share',
      value: '分享',
    },
    {
      key: 'ask',
      value: '问答',
    },
    {
      key: 'job',
      value: '招聘',
    },
    {
      key: 'dev',
      value: '客户端测试',
    },
  ],
  currentCata: {
    key: 'all',
    value: '全部'
  },
  showDrawer: false,
}

export default function menu(state = MENU_STATE, action: IMenutype) {
  switch (action.type) {
    case 'SHOW_DRAWER':
      return {
        ...state,
        showDrawer: true,
      }
    case 'HIDE_DRAWER':
      return {
        ...state,
        showDrawer: false,
      }
    case 'CHANGE_CATA':
      return {
        ...state,
        currentCata: action.currentCata
      }
    default:
      return state
  }
}
