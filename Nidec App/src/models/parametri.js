import mongoose from 'mongoose';
import mongoConn from '../db';

const ParametriSchema = new mongoose.Schema({
//-------- Menu 1------//    
    speed_reference: Number,
//-------- Menu 4------//    
	current_magnitude: Number,
	active_current: Number,
	torque_demand: Number,
	active_current_demand: Number,
	magnetising_current: Number,
	qverriding_current_limit: Number,
	motor_thermal_state: Number,
	drive_ixt_level: Number,
//-------- Menu 5------//    
	output_frequency: Number,
    output_voltage: Number,
    output_power: Number,
    motor_speed: Number,
    dc_bus_voltage: Number,
	created: { type: Date, default: Date.now }
},{'collection': 'parametri'});

module.exports = mongoConn.model('parametri', ParametriSchema);


