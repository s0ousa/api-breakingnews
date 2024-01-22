const mongoose = require('mongoose')

const connectDatabase = () => {
    console.log('Conectando ao banco de dados...')
    mongoose.connect(
        'mongodb+srv://root:r2NNDh0DEvnPsyWR@cluster0.otnbiyf.mongodb.net/?retryWrites=true&w=majority')
        .then(() => console.log('Conexão estabelecida com MongoDB Atlas'))
        .catch(erro => console.log(erro))
}

module.exports = connectDatabase