export interface ICataData {
  value: string
  key: string
}


export interface ICurrentCata {
  key: string
  value: string
}

export type menuStore = {
  cataData: Array<ICataData>
  currentCata: ICurrentCata
  changeCata: Function
  showDrawer: boolean
  hideMenu: any
  showMenu: any
}


export interface IMenuProps {
  menuStore: menuStore
}