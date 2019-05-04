import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, RichText } from '@tarojs/components'
import styles from './topicinfo.module.scss';
import timeToLocal from '../../utils/date';
import {IRepliesProps} from '../../interfaces/components/topicinfo'

const isweapp = process.env.TARO_ENV === 'weapp'

class Replies extends Component<IRepliesProps> {

  public static defaultProps: IRepliesProps = {
    userRoute: false,
    replies: []
  }


  goToUserInfo(loginname) {
    if (this.props.userRoute) {
      Taro.navigateTo({
        url: `/pages/user/index?loginname=${loginname}`,
      })
    }
  }


  render() {
    let { replies } = this.props
    return (
      <View>
        {
          replies.map((item, index) => {
            return (
              <View key={item.id} className={styles.replies}>
                <Image className={styles.img} src={item.author.avatar_url} onClick={this.goToUserInfo.bind(this, item.author.loginname)}></Image>

                <View className={styles.right}>
                  <View className={styles.body}>

                    <View className={styles.pie}>
                      <Text className={styles.floor}>{(index + 1)} 楼</Text>
                      <Text>{timeToLocal(item.create_at)}</Text>
                    </View>

                    <View className={styles.content}>
                      {
                        isweapp ? <RichText nodes={item.content}></RichText> : <View dangerouslySetInnerHTML={{ __html: item.content }}></View>
                      }
                    </View>
                  </View>
                </View>
              </View>
            )
          })
        }
      </View>
    )
  }
}

export default Replies
