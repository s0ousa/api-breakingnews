import newsService from "../services/news-service.js"

const create = async (req, res) => {
    try {
        const { title, text, banner } = req.body

        if (!title || !text || !banner) {
            res.status(400).send({
                message: "Submit all fields, please"
            })
        }

        await newsService.create({
            title,
            text,
            banner,
            user: req.userId
        })
        res.sendStatus(201)

    } catch (error) {
        res.status(500).send({ message: error.message })
    }

}

const findAll = async (req, res) => {
    try {
        let { limit, offset } = req.query
        limit = Number(limit)
        offset = Number(offset)

        if (!limit) {
            limit = 5
        }

        if (!offset) {
            offset = 0
        }

        const news = await newsService.findAll(offset, limit)
        const total = await newsService.countNews()
        const currentUrl = req.baseUrl

        const next = offset + limit
        const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null

        const previous = offset - limit < 0 ? null : offset - limit
        const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null
        if (news.length === 0) {
            res.status(400).send({ message: "There are no registered news" })
        }
        res.send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,
            results: news.map(item => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                coments: item.coments,
                name: item.user.name,
                username: item.user.username,
                userAvatar: item.user.avatar
            }))
        })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }

}

const topNews = async (req, res) => {

    try {
        const news = await newsService.topNews()

        if (!news) {
            return res.status(400).send({ message: "There is no registered post" })
        }

        res.send({
            news: {
                id: news._id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                coments: news.coments,
                name: news.user.name,
                username: news.user.username,
                userAvatar: news.user.avatar
            }
        })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }

}

export { create, findAll, topNews }