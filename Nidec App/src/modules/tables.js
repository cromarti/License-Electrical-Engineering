import Parametri_Model from './../models/parametri';
import moment from 'moment'

const index = (req, res) => {
             Parametri_Model.find().exec().then(results => {
            results = JSON.stringify(results);
            results = JSON.parse(results); 	
            results = results.map(function (elem) {
                elem.created = moment(elem.created).format('DD/MM/YYYY HH:mm');
                // console.log(elem.created);
                return elem;
            });

            let obj = results;
   			

            res.setHeader('Content-Type', 'application/json');
            res.send(obj);
        });
}

module.exports.index = index;


// import Parametri_Model from './../models/parametri';
// import moment from 'moment'

// const index = (req, res) => {
//             return Parametri_Model.find().exec().then(results => {

//             let obj = results.map(function (elem) {
//                 elem.created = moment(elem.created).format('DD/MM/YYYY');
//                 return elem;
//             });

//    			console.log(results);

//             res.setHeader('Content-Type', 'application/json');
//             res.send(obj);
//         });
// }

// module.exports.index = index;

