import { posts } from '../data/posts.data'
import type { Post } from '../types/post'

export class PostService {
  getPosts(): Post[] {
    return posts
  }

  createPost(
    payload: Omit<Post, 'id' | 'createdAt'>
  ): Post {
    const newPost = {
        id: Date.now(),
        createdAt: Date.now(),
        ...payload
    }

    posts.unshift(newPost)

    return newPost
  }

  deletePost(id: number): void {
    const index = posts.findIndex(post => post.id === id)

    if (index === -1) {
        throw new Error('Post not found')
    }

    posts.splice(index, 1)
  }
}
