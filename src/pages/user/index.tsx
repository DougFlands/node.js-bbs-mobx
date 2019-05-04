import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import api from '../../utils/api';
import styles from './index.module.scss';
import timeToLocal from '../../utils/date';
import Usertopic from '../../components/usertopic/list';

class User extends Component<{},any> {
  componentWillMount() {
    api.getuseinfo(this.$router.params.loginname).then(data => {
      this.setState({ ...data.data })
    })
  }

  state = {
    avatar_url: '',
    create_at: '',
    recent_replies: [],
    recent_topics: [],
    score: '',
    loginname: '',
  }

  render() {
    return (
      <View className={styles.wrap}>
        <View className={styles.top}>
          <Image src={this.state.avatar_url} className={styles.left}></Image>
          <View className={styles.right}>
            <View>{this.state.loginname}</View>
            <View>注册时间: { timeToLocal(this.state.create_at)}</View>
            <View>积分: {this.state.score}</View>
          </View>
        </View>

        <View className={styles.content}>
          <Usertopic title='最近创建的话题' list={this.state.recent_topics}></Usertopic>
        </View>

        <View className={styles.content}>
        <Usertopic title='最近参与的话题' list={this.state.recent_replies}></Usertopic>

        </View>

      </View>
    )
  }
}

export default User
