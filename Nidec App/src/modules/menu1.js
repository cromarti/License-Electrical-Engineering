import Parametri_Model from './../models/parametri';
import moment from 'moment'

const index = (req, res) => {
    
    Parametri_Model.find().exec().then(results => {
        var speed_reference = [];
        var time = [];
      
        results.forEach(function(set) {
            speed_reference.push(set.speed_reference);
// Convert time in format "HH:mm:ss"
            let str = set.created;
			let date = moment(str);
            let timeComponent = date.format('DD/MM/YYYY HH:mm');
            time.push(timeComponent);
        });
        res.render('template/menu1', {
        	speed_reference: speed_reference, 
        	time: time 
        });
    })
}

module.exports.index = index;