import mongoose from 'mongoose';
import mongoConn from '../db';

const DbStatus = new mongoose.Schema({
 
    status: Boolean,
},{'collection': 'DbStatus'});

module.exports = mongoConn.model('DbStatus', DbStatus);


