import { observable, action } from 'mobx'
import topiclistStore from './topiclist'
import {ICataData, ICurrentCata} from '../interfaces/components/menu';

class menu {
  @observable cataData: Array<ICataData> = [
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
  ]
  @observable currentCata: ICurrentCata = {
    key: 'all',
    value: '全部'
  }
  @observable showDrawer: boolean = false

  @action showMenu() {
    this.showDrawer = true
    console.log(this.showDrawer)
  }

  @action hideMenu() {
    this.showDrawer = false
  }

  @action changeCata(cata) {
    this.currentCata = cata
    topiclistStore.getTopicList({ page: 1, tab: this.currentCata.key }, true)
  }

}

let menuStore = new menu()

export default menuStore