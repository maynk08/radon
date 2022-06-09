const mongoose = require('mongoose');
const { modelName } = require('./authorModel');

const PublisherSchema = new mongoose.Schema({
    name: String,
    headQuarter: String,
})

module.exports = mongoose.model("Publisher",PublisherSchema)