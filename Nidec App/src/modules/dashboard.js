import Parametri_Model from './../models/parametri';
import mongoConn from '../db';


import moment from 'moment'



const indexJSON = (req, res) => {

        return Parametri_Model.findOne().sort({created : -1}).limit(1).exec().then(results => {

            res.setHeader('Content-Type', 'application/json');
            res.send(results);
            return;
        });

}


module.exports.indexJSON = indexJSON;