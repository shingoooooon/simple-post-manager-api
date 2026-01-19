// src/controllers/postController.ts

import { Request, Response } from 'express'
import { PostService } from '../services/posts.service'

const postService = new PostService

export const getPosts = async ( req: Request, res: Response ) => {
    const posts = postService.getPosts()
    return res.status(200).json(posts)
}

export const createPost = async ( req: Request, res: Response ) => {
  try {
    const { content, status } = req.body

    if (!content || !status) {
    return res.status(400).json({ message: 'Invalid payload'})
    }

    const newPost = postService.createPost({content, status})
    return res.status(201).json(newPost)

  } catch(err) {
    const message = err instanceof Error ? err.message : 'An error occurred'
    return res.status(400).json({ message })
  }
}

export const deletePost = async ( req: Request, res: Response ) => {
  try {
    const id = Number(req.params.id)

    if (Number.isNaN(id)) {
      return res.status(400).json({ message: 'Invalid ID'})
    }

    postService.deletePost(id)
    return res.status(204).end()
    
  } catch (err) {
    const message = err instanceof Error ? err.message : 'An error occurred'
    return res.status(404).json({ message })
  }  
}
