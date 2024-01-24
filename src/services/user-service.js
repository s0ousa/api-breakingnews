const User = require('../models/User')

const create = body => User.create(body)

const findAll = () => User.find()

const findById = (id) => User.findById(id)

const update = (
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
) =>
    User.findByIdAndUpdate(
        { _id: id },
        { name, username, email, password, avatar, background }
    )




module.exports = {
    create,
    findAll,
    findById,
    update
}