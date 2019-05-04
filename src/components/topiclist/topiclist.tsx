import Taro, { Component } from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Topice from './topice';
import { ITopiclistProps } from '../../interfaces/components/topicelist';

@inject('topiclistStore', 'menuStore')
// @inject('menuStore')
@observer
class Topiclist extends Component<ITopiclistProps, {}> {
  state = {
    scrollViewHeight: ''
  }

  componentWillMount() {
    let { topiclistStore, menuStore } = this.props
    topiclistStore.getTopicList({ page: topiclistStore.page, tab: menuStore.currentCata.key })

    Taro.getSystemInfo().then(data => {
      this.setState({
        scrollViewHeight: data.windowHeight - 30 + 'px'
      })
    })
  }

  onScrollToLower() {
    let { topiclistStore, menuStore } = this.props
    topiclistStore.getTopicList({ page: topiclistStore.page + 1, tab: menuStore.currentCata.key })
    console.log('翻页');
  }

  render() {
    const { topiclistStore: { list } } = this.props
    return (
      <ScrollView style={{ height: this.state.scrollViewHeight }} scrollY={true} onScrollToLower={this.onScrollToLower}>
        {
          list.slice().map((item, index) => <Topice item={item} key={index}></Topice>)
        }
      </ScrollView>
    )
  }
}

export default Topiclist
