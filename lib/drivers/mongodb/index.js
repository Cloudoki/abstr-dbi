const Mongoose = require('mongoose')
const DriverName = require('../drivers_names')
const Schema = Mongoose.Schema
let Connection = Mongoose.connection

const EngineType = DriverName.MongoDB

/**
 * @param {connectionParams,options} args
 * @returns {Promise} 
 */
const connect = async (args) => {
    const db = await Mongoose.connect(args.connectionParams, args.options)
    Connection = Mongoose.connection
    return db
}

module.exports = {
    Mongoose,
    Schema,
    EngineType,
    Connection,
    connect
}