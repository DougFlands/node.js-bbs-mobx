export interface ICataData {
  value: string
  key: string
}


export interface ICurrentCata {
  key: string
  value: string
}


export interface IMenuProps {
  cataData: Array<ICataData>
  currentCata: ICurrentCata
  changeCata: Function
  showDrawer: boolean
  hideMenu: any
  showMenu: any
}