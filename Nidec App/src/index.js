import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import mongoose from 'mongoose';
import ejsLocals from 'ejs-locals';
import passport from 'passport';
import expressSession from 'express-session';
import flash from 'connect-flash';
import moment from 'moment';
import initializeDb from './db';
import config from './config';
import cron from 'cron';

let app = express();
app.server = http.createServer(app);


// view engine setup
app.engine('ejs', ejsLocals);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
	
app.use(expressSession({secret: 'mySecretKey'}));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(cors({exposedHeaders: config.corsHeaders}));



// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
        message: err.message,
        error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${app.server.address().port}`);
});


require('./routes/index')(app);

export default app;