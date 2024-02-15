import News from '../models/News.js'

const create = (body) => News.create(body)

const findById = (id) => News.findById(id).populate("user")

const countNews = () => News.countDocuments()

const topNews = () =>
    News.findOne()
        .sort({ _id: -1 })
        .populate("user")

const byUser = (id) =>
    News.find({ user: id })
        .sort({ _id: -1 })
        .populate("user")

const searchByTitle = (title) =>
    News.find({
        title: { $regex: `${title || ""}`, $options: "i" },
    })
        .sort({ _id: -1 })
        .populate("user")

const findAll = (offset, limit) =>
    News.find()
        .sort({ _id: -1 })
        .skip(offset)
        .limit(limit)
        .populate("user")

const update = (id, title, text, banner) =>
    News.findOneAndUpdate(
        { _id: id },
        { title, text, banner, },
        { rawResult: true }
    )


export default {
    create,
    findAll,
    countNews,
    topNews,
    findById,
    searchByTitle,
    byUser,
    update
}