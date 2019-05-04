import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import styles from './list.module.scss';
import { IUsertopicProps } from '../../interfaces/components/usertopic'

class Usertopic extends Component<IUsertopicProps, {}> {

  public static defaultProps: IUsertopicProps = {
    title: '',
    list: []
  }

  goToDetail(topicid) {
    Taro.navigateTo({
      url: `/pages/detail/index?topiceid=${topicid}&userRoute=false`,
    })
  }

  render() {
    return (
      <View className={styles.warp}>
        <View className={styles.title}>
          <Text className={styles.text}>{this.props.title}</Text>
        </View>
        <View>
          {
            this.props.list.map(item => {
              return (
                <View className={styles.content} key={item.id} onClick={this.goToDetail.bind(this, item.id)}>
                  <View className={styles.text}>
                    {
                      item.title
                    }
                  </View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}

export default Usertopic
