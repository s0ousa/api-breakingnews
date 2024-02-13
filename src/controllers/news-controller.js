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
        const news = await newsService.findAll()

        if (news.length === 0) {
            res.status(400).send({ message: "There are no registered news" })
        }
        res.send(news)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }

}

export { create, findAll }