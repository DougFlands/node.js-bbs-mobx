import { observable } from 'mobx'
import topiclistStore from './topiclist'

const menuStore = observable({
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
  showMenu() {
    this.showDrawer = true
  },
  
  hideMenu() {
    this.showDrawer = false
  },
  
  changeCata(cata) {
    this.currentCata = cata
    topiclistStore.getTopicList({ page: 1, tab: this.currentCata.key }, true)
  },
})
export default menuStore