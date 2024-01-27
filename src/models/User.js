// {
//     "name": "Luis Sousa",
//     "username": "luisinho",
//     "email": "luisinho@luisinho.com",
//     "password": "senha",
//     "avatar": "https://avatars.githubusercontent.com/u/70407063?v=4",
//     "background":"https://i.imgur.com/ZRUSVcp.jpg"
//   }

import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatar: {
            type: String,
            required: true,
        },
        background: {
            type: String,
            required: true,
        },
    }
)

const User = mongoose.model("User", UserSchema)

export { User }