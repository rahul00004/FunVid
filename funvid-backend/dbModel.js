const mongoose = require('mongoose')

const FunvidSchema = mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: String,
    messages: String,
    description: String,
    shares: String,





})
//collection inside the database

const FunVid = mongoose.model('FunVid', FunvidSchema)


module.exports = FunVid