import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import {connect} from '@tarojs/redux';

@connect(
  store => {
    return { ...store }
  },
  dispatch => {
    return {
      
    }
  }
)
  
class Template extends Component {
  render() {
    return (
      <View>
        
      </View>
    )
  }
}

export default Template
