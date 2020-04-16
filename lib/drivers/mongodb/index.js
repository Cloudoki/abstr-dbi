const Mongoose = require('mongoose')
const DriverName = require('../drivers_names')
const Schema = Mongoose.Schema

const EngineType = DriverName.MongoDB

/**
 * @param {*} args
 * @returns {Promise} 
 */
const connect = async (args) => {
    return await Mongoose.connect(args.connectionParams, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = {
    Mongoose,
    Schema,
    EngineType,
    connect
}