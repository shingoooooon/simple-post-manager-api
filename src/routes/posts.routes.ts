import { Router } from 'express'
import { createPost, deletePost, getPosts } from '../controllers/posts.controller'

const router = Router()

router.get('/posts', getPosts)
        .post('/posts', createPost)
        .delete('/posts/:id', deletePost)

export default router