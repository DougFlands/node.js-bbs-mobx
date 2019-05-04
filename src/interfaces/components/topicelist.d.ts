import { IAuthor } from './topicinfo'
import {ICurrentCata, menuStore} from './menu'

interface ITopice {
  author: IAuthor
  top: boolean
  tab: string
  title: string
  reply_count: string
  visit_count: string
  create_at: string
}

export interface ITopiceProps {
  item: ITopice
}

type topiclistStore = {
  getTopicList: Function
  page: number
  tab: string
  currentCata: ICurrentCata
  list: Array<ITopice>
}

export interface ITopiclistProps {
  topiclistStore: topiclistStore
  menuStore: menuStore
}

