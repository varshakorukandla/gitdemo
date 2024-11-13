const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://varsha:vishnu37@india-aws.71wbr.mongodb.net/MaxStore?retryWrites=true&w=majority&appName=India-AWS")
const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')