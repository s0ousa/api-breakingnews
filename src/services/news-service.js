import News from '../models/News.js'

const create = (body) => News.create(body)

const findAll = () => News.find()


export default {
    create,
    findAll
}