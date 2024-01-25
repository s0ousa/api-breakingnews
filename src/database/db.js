const mongoose = require('mongoose')
require('dotenv').config()

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD


const connectDatabase = () => {
    console.log('Conectando ao banco de dados...')
    mongoose.connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.otnbiyf.mongodb.net/?retryWrites=true&w=majority`)
        .then(() => console.log('Conexão estabelecida com MongoDB Atlas'))
        .catch(erro => console.log(erro))
}

module.exports = connectDatabase