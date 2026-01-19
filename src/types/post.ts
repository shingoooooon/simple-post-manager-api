export type PostStatus = 'draft' | 'scheduled' | 'posted'

export type Post = {
  id: number
  content: string
  status: PostStatus
  createdAt: number
}