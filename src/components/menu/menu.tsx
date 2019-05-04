import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtDrawer } from 'taro-ui';
import { observer, inject } from '@tarojs/mobx'
import styles from './menu.module.scss';
import { IMenuProps } from '../../interfaces/components/menu';

@inject('menuStore')
@observer
class Menu extends Component<IMenuProps, {}> {
  clickCata(index) {
    const { menuStore } = this.props
    let clickcataData = menuStore.cataData[index]
    if (clickcataData.key !== menuStore.currentCata.key) {
      menuStore.changeCata(clickcataData)
    }
  }

  showMenu() {
    console.log(this.props);
    const { menuStore } = this.props
    menuStore.showMenu()
  }

  hideMenu() {
    const { menuStore } = this.props
    menuStore.hideMenu()
  }


  render() {
    const { menuStore: { cataData, currentCata, showDrawer } } = this.props
    const items = cataData.slice().map(item => item.value)
    return (
      <View className={styles.menu}>

        <AtDrawer style='position: absolute;' show={showDrawer} onClose={this.hideMenu.bind(this)} items={items}
          onItemClick={this.clickCata.bind(this)}></AtDrawer>

        <Image onClick={this.showMenu.bind(this)} src={require('../../assets/img/menu.png')} className={styles.menuImg}></Image>
        <Text>{currentCata.value}</Text>
        <View className={styles.menuImg}></View>
      </View>
    )
  }
}

export default Menu
