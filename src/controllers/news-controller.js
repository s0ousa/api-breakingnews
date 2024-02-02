import newsService from "../services/news-service.js"

const create = async (req, res) => {
    try {

        const { authorization } = req.headers
        console.log(authorization) //tira dps

        if (!authorization) {
            return res.sendStatus(401)
        }

        parts = authorization.split(" ")
        const [schema, token] = parts

        if (parts.length !== 2 || schema !== "Bearer") {
            return res.sendStatus(401)
        }

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
            user: { _id: "65b57d671f8ad1e6f4743e9a" }
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