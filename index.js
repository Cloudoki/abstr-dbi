
/**
 * Author: Erick Rettozi
 * (C) 2020
 * 
 * Database independent interface.
 *
 * This version only includes drivers for NoSQL databases, and so far, only for MongoDB.
 *
 * Future Engines: Cassandra and CouchDB
 */
const DBI = require('./lib/dbi')

module.exports = (args = {driver:null}) => {
    if (args['driver'] == null) {
        return new Error("It is mandatory to pass a drive. {driver: 'mongodb'} for example")
    }
    return DBI(args.driver)
}