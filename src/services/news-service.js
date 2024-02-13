import News from '../models/News.js'

const create = (body) => News.create(body)

const findAll = (offset, limit) =>
    News.find()
        .sort({ _id: -1 })
        .skip(offset)
        .limit(limit)
        .populate("user")

const countNews = () => News.countDocuments()

const topNews = () => News.findOne().sort({ _id: -1 }).populate("user")

export default {
    create,
    findAll,
    countNews,
    topNews
}