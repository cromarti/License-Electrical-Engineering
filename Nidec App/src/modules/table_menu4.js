import Parametri_Model from './../models/parametri';
import moment from 'moment' 

const index = (req, res) => {
    
    Parametri_Model.find().exec().then(results => {
		var current_magnitude =[];
		var active_current =[];
		var torque_demand =[];
		var active_current_demand =[];
		var magnetising_current =[];
		var qverriding_current_limit =[];
		var motor_thermal_state =[];
		var drive_ixt_level =[];
        var time = [];
        results.forEach(function(set) {
            current_magnitude.push(set.current_magnitude);
            active_current.push(set.active_current);
            torque_demand.push(set.torque_demand);
            active_current_demand.push(set.active_current_demand);
            magnetising_current.push(set.magnetising_current);
            qverriding_current_limit.push(set.qverriding_current_limit);
            motor_thermal_state.push(set.motor_thermal_state);
            drive_ixt_level.push(set.drive_ixt_level);

// Convert time in format "MMMM Do YYYY, HH:mm:ss"
            let str = set.created;
            let date = moment(str);
            let timeComponent = date.utc().format('DD/MM/YYYY');
            time.push(timeComponent);
//---------------------------------------//
        });
        res.render('template/table_menu4', { 
    		current_magnitude : current_magnitude,
			active_current : active_current,
			torque_demand : torque_demand,
			active_current_demand : active_current_demand,
			magnetising_current : magnetising_current,
			qverriding_current_limit : qverriding_current_limit,
			motor_thermal_state : motor_thermal_state,
			drive_ixt_level : drive_ixt_level,
			time: time
        });
    })
}

module.exports.index = index;