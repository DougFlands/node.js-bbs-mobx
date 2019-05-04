import { ITopicinfo } from '../components/topicinfo'

interface IUser {

}

type topiclistStore = {
  getTopicInfo: any
  topicinfo: ITopicinfo
  replies: any
}

export interface IDetailProps {
  topiclistStore: topiclistStore
}

export interface IDetailState {
  userRoute: boolean
}