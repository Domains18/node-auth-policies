const mongoose = require ('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')



async function connect() {
    const mongod = await MongoMemoryServer.create()
    const getUri = mongod.getUri()

    const db = await mongoose.connect(getUri);
    console.log(`Deplpyment succesfully pinged at ${db.connection.host}`);
    return db
}

module.exports = connect
