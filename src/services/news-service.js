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

const erase = (id) => News.findOneAndDelete({ _id: id })

const likeNews = (idNews, userId) =>
    News.findOneAndUpdate(
        { _id: idNews, "likes.userId": { $nin: [userId] } },
        { $push: { likes: { userId, created: new Date() } } }
    )

const deleteLikeNews = (idNews, userId) =>
    News.findOneAndUpdate(
        { _id: idNews },
        { $pull: { likes: { userId } } }
    )

const addComment = (idNews, comment, userId) => {
    const idComment = Math.floor(Date.now() * Math.random()).toString(36);

    return News.findOneAndUpdate(
        { _id: idNews },
        {
            $push: {
                comments: { idComment, userId, comment, createdAt: new Date() },
            },
        }
    )
}

const deleteComment = (idNews, idComment, userId) =>
    News.findOneAndUpdate(
        { _id: idNews },
        { $pull: { comments: { idComment, userId } } }
    )

export default {
    create,
    findAll,
    countNews,
    topNews,
    findById,
    searchByTitle,
    byUser,
    update,
    erase,
    likeNews,
    deleteLikeNews,
    addComment,
    deleteComment
}