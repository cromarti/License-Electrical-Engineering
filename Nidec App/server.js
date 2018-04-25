var http = require('http');

var getRandomBetween = function(a, b) {
	return Math.floor(Math.random() * b) + a;  
}

//create a server object:
http.createServer(function (req, res) {

 	res.setHeader('Content-Type', 'application/json');

 //-------- Menu 1------// 
	var speed_reference = getRandomBetween(1, 100);

//-------- Menu 4------// 	
	var current_magnitude = getRandomBetween(0, 2000);
	var active_current = getRandomBetween(1, 1000);
	var torque_demand = getRandomBetween(1, 1000);
	var active_current_demand = getRandomBetween(0, 2000);
	var magnetising_current = getRandomBetween(1, 1000);
	var qverriding_current_limit = getRandomBetween(0, 2000);
	var motor_thermal_state = getRandomBetween(1, 500);
	var drive_ixt_level = getRandomBetween(0, 3000);

//-------- Menu 5------// 	
	var output_frequency = getRandomBetween(1, 1000);
	var output_voltage = getRandomBetween(0, 2000);
	var output_power = getRandomBetween(1, 1000);
	var motor_speed = getRandomBetween(0, 2000);
	var dc_bus_voltage = getRandomBetween(1, 1500);


	var obj = {
 //-------- Menu 1------// 		
		"speed_reference": speed_reference, 

//-------- Menu 4------//		
		"current_magnitude": current_magnitude, 
		"active_current": active_current,
		"torque_demand" : torque_demand,
		"active_current_demand": active_current_demand,
		"magnetising_current": magnetising_current,
		"qverriding_current_limit": qverriding_current_limit,
		"motor_thermal_state": motor_thermal_state,
        "drive_ixt_level": drive_ixt_level,

//-------- Menu 5------//		
        "output_frequency" : output_frequency,
		"output_voltage" : output_voltage,
		"output_power" : output_power,
		"motor_speed" : motor_speed,
		"dc_bus_voltage" : dc_bus_voltage,
		};

	res.write(JSON.stringify(obj)); //write a response to the client
	res.end(); //end the response
}).listen(9000); //the server object listens on port 9000

console.log('Server started on port: 9000');
