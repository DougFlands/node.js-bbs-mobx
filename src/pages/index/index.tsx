import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Menu from '../../components/menu/menu';
import Topiclist from '../../components/topiclist/topiclist';
// import { observer, inject } from '@tarojs/mobx'

// @inject('counterStore')
// @observer
class Index extends Component {

  config: Config = {
    navigationBarTitleText: '首页'
  }

  render() {
    return (
      <View className='index'>
        <Menu></Menu>
        <Topiclist></Topiclist>
      </View>
    )
  }

  // increment = () => {
  //   const { counterStore } = this.props
  //   counterStore.increment()
  // }

  // render () {
  //   const { counterStore: { counter } } = this.props
  //   return (
  //     <View className='index'>
  //       <Button onClick={this.increment}>+</Button>
  //       <Text>{counter}</Text>
  //     </View>
  //   )
  // }


}

export default Index  as ComponentType
