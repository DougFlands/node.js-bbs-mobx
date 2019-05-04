import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import { AtDrawer } from 'taro-ui';
import styles from './menu.module.scss';
import { showDrawer, hideDrawer, changeCata } from '../../actions/menu';
import { IMenuProps } from '../../interfaces/components/menu';


@connect(
  store => {
    return { ...store.menu }
  },
  dispatch => {
    return {
      showMenu() {
        dispatch(showDrawer())
      },
      hideMenu() {
        dispatch(hideDrawer())
      },
      changeCata(cata) {
        dispatch(changeCata(cata))
      }
    }
  }
)

class Menu extends Component<IMenuProps, {}> {
  public static defaultProps: IMenuProps = {
    cataData: [],
    currentCata: {
      key: 'all',
      value: '全部'
    },
    showDrawer: false,
    changeCata: () => {},
    hideMenu: () => {},
    showMenu: () => {},
  }


  clickCata(index) {
    let { cataData } = this.props
    let clickcataData = cataData[index]
    if (clickcataData.key !== this.props.currentCata.key) {
      this.props.changeCata(clickcataData)
    }
  }

  render() {
    const items = this.props.cataData.map(item => item.value)
    return (
      <View className={styles.menu}>

        <AtDrawer style='position: absolute;' show={this.props.showDrawer} onClose={this.props.hideMenu} items={items}
          onItemClick={this.clickCata.bind(this)}></AtDrawer>

        <Image onClick={this.props.showMenu} src={require('../../assets/img/menu.png')} className={styles.menuImg}></Image>
        <Text>{this.props.currentCata.value}</Text>
        <View className={styles.menuImg}></View>
      </View>
    )
  }
}

export default Menu
