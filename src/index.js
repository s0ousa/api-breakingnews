import express from 'express'
import connectDatabase from './database/db.js'

import userRoute from './routes/user-route.js'
import authRoute from './routes/auth-route.js'
import newsRoute from './routes/news-route.js'
import swaggerRoute from './routes/swagger-route.cjs'

const app = express()
const port = process.env.port || 3000

connectDatabase()
app.use(express.json());
app.use('/user', userRoute)
app.use('/auth', authRoute)
app.use('/news', newsRoute)
app.use('/doc', swaggerRoute)

app.listen(port, () => console.log('Servidor online na porta', port))