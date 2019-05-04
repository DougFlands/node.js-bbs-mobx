import { ICurrentCata } from './components/menu'
import { ITopice } from './components/topicelist'
import { Ireplies } from './components/topicinfo'

interface IType {
  type: string
}

interface IInfoData {
  replies: Ireplies
}

export interface IMenutype extends IType {
  currentCata: ICurrentCata
}

export interface ITopiclisttype extends IType {
  page: number
  changeTag: boolean
  list: Array<ITopice>
  infoData: IInfoData
}
