const create = (req, res) => {
    const user = req.body
    const { name, username, email, password, avatar, background } = user

    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400)
            .send({ message: "Submit all fields for registration, please." })
    }

    res.status(201).send({
        message: "User created successfully",
        user
    })
}

module.exports = { create }