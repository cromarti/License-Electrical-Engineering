import ParametriSchema from './../models/parametri';
import DbStatus from './../models/DbStatus';
import http from 'http';
var CronJob = require('cron').CronJob;

const storeFunction = (req, res) => {
   

    var st = {};
    if(req.body.status=="OFF"){
        st = {status: false};
    }else{
        st = {status: true}
    }
    DbStatus.update({_id: "5abfdb54b52c08d278901b56"}, st, function(err, numberAffected, rawResponse) {
       console.log('Database status '+ req.body.status )
    })


        var job = new CronJob('* * * * * *', function() {

                // http.get('http://10.100.99.206/parametri_nidec.shtm', function(resp) {
                //     // The whole response has been received. Print out the result.
                //     var data ="";
                //     resp.on('data', function(chunk) {
                //         data +=chunk;
                //     });

                //     resp.on('end', () => {
                //     let array = data.split(' ').map(Number); 

                //     var obj = {
                //  //-------- Menu 1------//      
                //         "speed_reference": array[0], 

                // //-------- Menu 4------//       
                //         "current_magnitude": array[1], 
                //         "active_current": array[2],
                //         "torque_demand" : array[3],
                //         "active_current_demand": array[4],
                //         "magnetising_current": array[5],
                //         "qverriding_current_limit": array[6],
                //         "motor_thermal_state": array[7],
                //         "drive_ixt_level": array[8],

                // //-------- Menu 5------//       
                //         "output_frequency" : array[9],
                //         "output_voltage" : array[10],
                //         "output_power" : array[11],
                //         "motor_speed" : array[12],
                //         "dc_bus_voltage" : array[13],

                // //-------- Menu 22------//
                //         // "cycle_count":,
                //         // "calculated_alpha_angle":,
                //         // "calculated_motor_power_factor":,
                //         // "ld_total":,
                //         // "lq_total":,
                //         // "efficace_I_phase_1":,
                //         // "efficace_I_phase_2":,
                //         // "efficace_I_phase_3":,
                //         // "dc_bus_current":,

                //         };

                        
                //         ParametriSchema.create(obj).then(result => {
                //             console.log("stocat! " + Date.now());
                //         });
                //     });
                // }).on("error", function(err) {
                //     console.log("Error: " + err.message);
                // });
              
        },null , false, 'Europe/Bucharest');

        // if(req.body.status=="ON"){
        //     job.start();
        // };
        if(req.body.status=="OFF"){
            job.stop();
        }
    }



module.exports = storeFunction





















// import ParametriSchema from './../models/parametri';
// import http from 'http';

// const storeFunction = (req, res) => {
//                 http.get('http://10.100.99.206/parametri_nidec.shtm', function(resp) {
//                     // The whole response has been received. Print out the result.
//                     var data ="";
//                     resp.on('data', function(chunk) {
//                         data +=chunk;
//                     });

//                     resp.on('end', () => {
//                     console.log(data);
//                     let array = data.split(' ').map(Number);
//                     console.log(array);

//                     var obj = {
//                  //-------- Menu 1------//      
//                         "speed_reference": array[0], 

//                 //-------- Menu 4------//       
//                         "current_magnitude": array[1], 
//                         "active_current": array[2],
//                         "torque_demand" : array[3],
//                         "active_current_demand": array[4],
//                         "magnetising_current": array[5],
//                         "qverriding_current_limit": array[6],
//                         "motor_thermal_state": array[7],
//                         "drive_ixt_level": array[8],

//                 //-------- Menu 5------//       
//                         "output_frequency" : array[9],
//                         "output_voltage" : array[10],
//                         "output_power" : array[11],
//                         "motor_speed" : array[12],
//                         "dc_bus_voltage" : array[13],
//                         };
//                     console.log(obj);

//                         ParametriSchema.create(obj).then(result => {
//                             res.send('Stored successfully <br />' + JSON.stringify(result));
//                         })
//                     });
//                 }).on("error", function(err) {
//                     console.log("Error: " + err.message);
//                 });

//     }

// module.exports = storeFunction





// import ParametriSchema from './../models/parametri';
// import http from 'http';

// const storeFunction = (req, res) => {
//                 http.get('http://localhost:9000/', function(resp) {
//                     // The whole response has been received. Print out the result.
//                     var data = '';
//                     resp.on('data', function(chunk) {
//                         data += chunk;
//                     });

//                     resp.on('end', () => {

//                         let values = JSON.parse(data);

//                         ParametriSchema.create(values).then(result => {
//                             res.send('Stored successfully <br />' + JSON.stringify(result));
//                         })
//                     });
//                 }).on("error", function(err) {
//                     console.log("Error: " + err.message);
//                 });

//     }

// module.exports = storeFunction