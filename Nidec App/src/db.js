import mongoose from 'mongoose';
import config from './config';
mongoose.Promise = require('bluebird');

const MongoConn = mongoose.createConnection(config.database.uri, {
    useMongoClient: true,
});

export default MongoConn;