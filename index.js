const express = require('express')
const app = express()
app.use(express.json());

const userRoute = require('./src/routes/user-route')
app.use('/user', userRoute)

const connectDatabase = require('./src/database/db')
connectDatabase()


const port = 3000
app.listen(port, () => console.log('Servidor online na porta', port))