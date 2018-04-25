var Bbs = require('../persister/bbs');
var mysql = require('mysql');

import mongoose from 'mongoose';
import mongoConn from '../db';

import dashboardController from '../modules/dashboard';
import menu1Controller from '../modules/menu1';
import menu4Controller from '../modules/menu4';
import menu5Controller from '../modules/menu5';

import tablesController from '../modules/tables';
import menu1_tableController from '../modules/table_menu1';
import menu4_tableController from '../modules/table_menu4';
import menu5_tableController from '../modules/table_menu5';

import storeController from '../modules/store';

module.exports = function(app, passport){
	
	 /* GET home page. */
	app.get('/', function(req, res) {
	   res.redirect('/dashboard');
	});


	app.get('/dashboard', function(req, res) {
	   res.render('template/dashboard', {});
	});

	app.post('/store', storeController );

	app.get('/data', dashboardController.indexJSON);

	app.get('/menu1', menu1Controller.index);
	app.get('/menu4', menu4Controller.index);
 	app.get('/menu5', menu5Controller.index);

 	app.get('/tables', tablesController.index);
 	app.get('/table_menu1', menu1_tableController.index);
  	app.get('/table_menu4', menu4_tableController.index);
  	app.get('/table_menu5', menu5_tableController.index);

 


	/*app.get('/tables', function(req, res) {
	   res.render('template/tables', {});
	});*/


}




