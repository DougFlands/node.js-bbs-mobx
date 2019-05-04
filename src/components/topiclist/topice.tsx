import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import styles from './topic.module.scss';
import timeToLocal from '../../utils/date';
import { ITopiceProps } from '../../interfaces/components/topicelist'

class Topice extends Component<ITopiceProps, {}> {
  goToDetail(topice) {
    Taro.navigateTo({
      url: `/pages/detail/index?topiceid=${topice.id}`,
    })
  }

  render() {
    let { item } = this.props
    return (
      <View className={styles.topic} onClick={this.goToDetail.bind(this, item)}>
        <Image src={item.author ? item.author.avatar_url : ''} className={styles.headImg}></Image>
        <View className={styles.right}>

          <View className={styles.top}>
            {
              item.top ? <Text className={`${styles.tag} ${styles.tagTop}`}>置顶</Text> : (item.tab === 'share' ? <Text className={styles.tag}>分享</Text> : <Text className={styles.tag}>问答</Text>)
            }

            <Text className={styles.title}>{item.title}</Text>
          </View>

          <View className={styles.btm}>
            <Text>{item.author ? item.author.loginname : ''}</Text>
            <Text>{item.reply_count + '/' + item.visit_count}</Text>
            <Text>创建时间: {item ? timeToLocal(item.create_at) : ''}</Text>
          </View>

        </View>
      </View>
    )
  }
}

export default Topice
