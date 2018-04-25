import Parametri_Model from './../models/parametri';
import moment from 'moment'

const index = (req, res) => {
    
    Parametri_Model.find().exec().then(results => {
		var output_frequency =[];
		var output_voltage =[];
		var output_power =[];
		var motor_speed =[];
		var dc_bus_voltage =[];
        var time = [];

        results.forEach(function(set) {
            output_frequency.push(set.output_frequency);
            output_voltage.push(set.output_voltage);
            output_power.push(set.output_power);
            motor_speed.push(set.motor_speed);
            dc_bus_voltage.push(set.dc_bus_voltage);
// Convert time in format "HH:mm:ss"
            let str = set.created;
			let date = moment(str);
            let timeComponent = date.format('DD/MM/YYYY HH:mm');
            time.push(timeComponent);
        });
        res.render('template/menu5', { 
        	output_frequency: output_frequency,
			output_voltage: output_voltage,
			output_power: output_power,
			motor_speed: motor_speed,
			dc_bus_voltage: dc_bus_voltage,
        	time: time });
    })
}

module.exports.index = index;