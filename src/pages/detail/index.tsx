import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import Topicinfo from '../../components/topicinfo/topicinfo';
import Replies from '../../components/topicinfo/replies';
import { IDetailProps, IDetailState } from '../../interfaces/pages/Idetail'

@inject('topiclistStore')
@observer
class Detail extends Component<IDetailProps, IDetailState> {
  config: Config = {
    navigationBarTitleText: '话题详情'
  }

  state = {
    userRoute: true
  }

  componentWillMount() {
    let { topiclistStore } = this.props
    topiclistStore.getTopicInfo(this.$router.params.topiceid)
    if (this.$router.params.userRoute) {
      this.setState({
        userRoute: JSON.parse(this.$router.params.userRoute)
      })
    }

  }

  render() {
    let { topiclistStore: { topicinfo, replies } } = this.props
    return (
      <View>
        <Topicinfo topicinfo={topicinfo}></Topicinfo>
        <Replies replies={replies.slice()} userRoute={this.state.userRoute}></Replies>
      </View>
    )
  }
}

export default Detail
