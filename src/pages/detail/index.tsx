import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import { getTopicInfo } from '../../actions/topiclist';
import Topicinfo from '../../components/topicinfo/topicinfo';
import Replies from '../../components/topicinfo/replies';
import {IDetailProps, IDetailState} from '../../interfaces/pages/Idetail'

@connect(
  store => {
    return {
      topicinfo: store.topiclist.topicinfo,
      replies: store.topiclist.replies,
    }
  },
  dispatch => {
    return {
      getTopicInfo(params) {
        dispatch(getTopicInfo(params))
      },
    }
  }
)

class Detail extends Component<IDetailProps, IDetailState> {
  config = {
    navigationBarTitleText: '话题详情'
  }

  state = {
    userRoute: true
  }
  
  componentWillMount() {
    this.props.getTopicInfo(this.$router.params.topiceid)
    if (this.$router.params.userRoute) {
      this.setState({
        userRoute: JSON.parse(this.$router.params.userRoute)
      })
    }

  }
 
  render() {
    let {topicinfo, replies} = this.props
    return (
      <View>
        <Topicinfo topicinfo={topicinfo}></Topicinfo>
        <Replies replies={replies} userRoute={this.state.userRoute}></Replies>
      </View>
    )
  }
}

export default Detail
