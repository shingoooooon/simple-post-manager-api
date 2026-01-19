import express from 'express'
import cors from 'cors'
import postRoutes from './routes/posts.routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', postRoutes)

export default app
 