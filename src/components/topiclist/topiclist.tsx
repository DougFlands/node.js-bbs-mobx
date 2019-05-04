import Taro, { Component } from '@tarojs/taro'
import { ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import { getTopicList } from '../../actions/topiclist';
import Topice from './topice';
import { ITopiclistProps } from '../../interfaces/components/topicelist';

@connect(
  store => {
    return { ...store.topiclist, currentCata: store.menu.currentCata }
  },
  dispatch => {
    return {
      getTopicList(params) {
        dispatch(getTopicList(params))
      },
    }
  }
)

class Topiclist extends Component<ITopiclistProps, {}> {
  public static defaultProps: ITopiclistProps = {
    getTopicList: () => { },
    page: 1,
    tab: 'all',
    currentCata: {
      key: 'all',
      value: '全部'
    },
    list: [],
  }

  state = {
    scrollViewHeight: ''
  }

  componentWillMount() {
    let { page, currentCata } = this.props
    this.props.getTopicList({ page, tab: currentCata.key })

    Taro.getSystemInfo().then(data => {
      this.setState({
        scrollViewHeight: data.windowHeight - 30 + 'px'
      })
    })
  }

  onScrollToLower() {
    let { page, currentCata } = this.props
    this.props.getTopicList({ page: page + 1, tab: currentCata.key })
    console.log('翻页');
  }

  render() {
    return (
      <ScrollView style={{ height: this.state.scrollViewHeight }} scrollY={true} onScrollToLower={this.onScrollToLower.bind(this)}>
        {
          this.props.list.map((item, index) => <Topice item={item} key={index}></Topice>)
        }
      </ScrollView>
    )
  }
}

export default Topiclist
