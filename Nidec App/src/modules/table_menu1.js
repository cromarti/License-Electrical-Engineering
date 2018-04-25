import Parametri_Model from './../models/parametri';
import moment from 'moment'

// const index = (req, res) => {
//             return Parametri_Model.find({},{speed_reference:1 ,created:1}).exec().then(results => {

//             res.setHeader('Content-Type', 'application/json');
//             res.send(results);
//             return;
//         });
// }

// module.exports.index = index;



const index = (req, res) => {
    
    Parametri_Model.find().exec().then(results => {
        var speed_reference = [];
        var time = [];
      
        results.forEach(function(set) {
            speed_reference.push(set.speed_reference);
// Convert time in format "MMMM Do YYYY, HH:mm:ss"
            let str = set.created;
            let date = moment(str);
            let timeComponent = date.utc().format('DD/MM/YYYY');
            time.push(timeComponent);
        });
        res.render('template/table_menu1', {
        	speed_reference: speed_reference, 
        	time: time 
        });
    })
}

module.exports.index = index;