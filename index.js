import express from 'express'
import connectDatabase from './src/database/db.js'

import userRoute from './src/routes/user-route.js'
import authRoute from './src/routes/auth-user.js'

const app = express()
const port = process.env.port || 3000

connectDatabase()
app.use(express.json());
app.use('/user', userRoute)
app.use('/auth', authRoute)

app.listen(port, () => console.log('Servidor online na porta', port))