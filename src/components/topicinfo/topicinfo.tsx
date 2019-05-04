import Taro, { Component } from '@tarojs/taro'
import { View, Text, RichText } from '@tarojs/components'
import styles from './topicinfo.module.scss';
import timeToLocal from '../../utils/date';
import { ITopicinfoProps } from '../../interfaces/components/topicinfo';

class Topicinfo extends Component<ITopicinfoProps> {

  public static defaultProps: ITopicinfoProps = {
    topicinfo: {
      top: false,
      tab: '',
      title: '',
      create_at: '',
      visit_count: '',
      author: {
        loginname: '',
        avatar_url: ''
      },
      content: '',
    }
  }

  render() {
    let { topicinfo } = this.props

    return (
      <View className={styles.topicinfo}>

        <View className={styles.header}>
          <View className={styles.headerTitle}>
            {
              topicinfo.top ? <Text className={`${styles.tag} ${styles.tagTop}`}>置顶</Text> : (topicinfo.tab === 'share' ? <Text className={styles.tag}>分享</Text> : <Text className={styles.tag}>问答</Text>)
            }
            <View className={styles.title}>{topicinfo.title}</View>
          </View>
          <View className={styles.headerPie}>
            <Text>{timeToLocal(topicinfo.create_at)}</Text>
            <Text>{topicinfo.author.loginname}</Text>
            <Text>{topicinfo.visit_count} 次浏览</Text>
          </View>
        </View>

        <View className={styles.body}>
          <RichText nodes={topicinfo.content}></RichText>
        </View>
      </View>
    )
  }
}

export default Topicinfo
