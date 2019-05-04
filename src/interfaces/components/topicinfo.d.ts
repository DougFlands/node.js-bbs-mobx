export interface IAuthor {
  loginname: string
  avatar_url: string
}


export interface ITopicinfo {
  top: Boolean
  tab: string
  title: string
  create_at: string
  visit_count: string
  author: IAuthor
  content: string
}


export interface ITopicinfoProps {
  topicinfo: ITopicinfo
}

export interface Ireplies {
  id: string
  author: IAuthor
  create_at: string
  content: string
}



export interface IRepliesProps {
  userRoute: Boolean
  replies: Array<Ireplies>
}

