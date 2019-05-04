import { ITopicinfo } from '../components/topicinfo'

interface IUser {

}



export interface IDetailProps {
  getTopicInfo: any
  topicinfo: ITopicinfo
  replies: any
}

export interface IDetailState {
  userRoute: boolean
}