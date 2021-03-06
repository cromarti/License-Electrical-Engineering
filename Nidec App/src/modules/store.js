
import ParametriSchema from './../models/parametri';
import DbStatus from './../models/DbStatus';
import http from 'http';
var CronJob = require('cron').CronJob;


var job  = new CronJob('* * * * * *', function() {

    http.get('http://10.100.99.208/parametri_nidec.shtm', function(resp) {
        // The whole response has been received. Print out the result.
        var data ="";
        resp.on('data', function(chunk) {
            data +=chunk;
        });

        resp.on('end', () => {
        let array = data.split(' ').map(Number);

        var obj = {
     //-------- Menu 1------//
            "speed_reference": array[0],

    //-------- Menu 4------//
            "current_magnitude": array[1],
            "active_current": array[2],
            "torque_demand" : array[3],
            "active_current_demand": array[4],
            "magnetising_current": array[5],
            "qverriding_current_limit": array[6],
            "motor_thermal_state": array[7],
            "drive_ixt_level": array[8],

    //-------- Menu 5------//
            "output_frequency" : array[9],
            "output_voltage" : array[10],
            "output_power" : array[11],
            "motor_speed" : array[12],
            "dc_bus_voltage" : array[13],

    //-------- Menu 22------//
            // "cycle_count":,
            // "calculated_alpha_angle":,
            // "calculated_motor_power_factor":,
            // "ld_total":,
            // "lq_total":,
            // "efficace_I_phase_1":,
            // "efficace_I_phase_2":,
            // "efficace_I_phase_3":,
            // "dc_bus_current":,

            };


            ParametriSchema.create(obj).then(result => {
                console.log("stocat! " + Date.now());
            });
        });
    }).on("error", function(err) {
        console.log("Error: " + err.message);
    });
    console.log("stored +1");
},null , false, 'Europe/Bucharest');


const storeFunction = (req, res) => {

    console.log('storeFunction');

    var st = {};
    if(req.body.status=="OFF"){
        st = {status: false};
    }else{
        st = {status: true};
    };
    DbStatus.update({_id: "5b169de3b37adb19c42519da"}, st, function(err, numberAffected, rawResponse) {
       console.log('Database status '+ req.body.status )
    });

    //console.log(job);
    if(req.body.status=="ON"){
        job.start();
    };
    if(req.body.status=="OFF"){
        console.log('OFF');
        job.stop();
    }
}



module.exports = storeFunction
