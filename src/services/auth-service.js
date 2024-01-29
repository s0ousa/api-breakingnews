import { User } from '../models/User.js'

const login = (email) => User.findOne({ email: email }).select('+password')

export default login