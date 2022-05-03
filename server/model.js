const mongoose = require('mongoose')

const listSchema = new mongoose.Schema({
    todo:String,
    iscomplete:{type: Boolean, default: false},
    created: {type: Date, default: Date.now}
})

mongoose.model('list',listSchema)