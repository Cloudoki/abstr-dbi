const Drivers = require('../drivers')

module.exports = (driver) => {
    switch (driver.toLowerCase()) {
        case (Drivers.DriverName.MongoDB):
            return Drivers.MongoDB
            break;

        case (Drivers.DriverName.Cassandra):
            console.log('A drive for Cassandra is not yet available.')
            break;

        case (Drivers.DriverName.CouchDB):
            console.log('A drive for CouchDB is not yet available.')
            break;
    }
}