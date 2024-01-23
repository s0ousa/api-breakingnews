const userService = require('../services/user-service')
const mongoose = require('mongoose')

const create = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body

    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400)
            .send({ message: "Submit all fields for registration, please." })
    }

    const user = await userService.create(req.body)
    if (!user) {
        res.status(400)
            .send({ message: "Error creating User" })
    }

    res.status(201).send({
        message: "User created successfully",
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar,
            background
        }
    })
}

const findAll = async (req, res) => {
    const users = await userService.findAll()

    if (users.length === 0) {
        return res.status(400).send({ message: 'Não há usuários cadastrados ou houve um erro.' })
    }

    res.send(users)
}

const findById = async (req, res) => {
    const id = req.params.id

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({ message: "Id invalido" })
    }

    const user = await userService.findById(id)
    if (!user) {
        return res.status(400).send({ message: "Usuario nao encontrado" })
    }

    res.send(user)
}

module.exports = { create, findAll, findById }