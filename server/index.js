const express = require('express')
const mongoose = require("mongoose");
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000
const { mongo_url } = require('./Keys')



mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
    console.log('Database is connected')
})

require('./model')
app.use(express.json())
app.use(cors())
app.use(require('./routes'))
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})