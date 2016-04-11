'use strict';

var CLIENT_ID = '245494122315-ln3gvkbrfe221n2k1q11r94mk75f5af6.apps.googleusercontent.com';
var CLIENT_SECRET = 'P4ZEJFi5bDlAlSdCxJaxekDj';
var REDIRECT_URL = 'http://localhost:8081/oauthcallback';

var express = require('express');
var bodyParser = require('body-parser');
var google = require('googleapis');
var oauth2 = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
google.options({auth: oauth2});

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

function getCalendar() {
    return google.calendar({version: 'v3'});
}

app.get('/oauth', function (req, res) {
    var url = oauth2.generateAuthUrl({
        access_type: 'offline',
        scope: 'https://www.googleapis.com/auth/calendar'
    });

    res.redirect(url);
});

app.get('/oauthcallback', function (req, res) {
    oauth2.getToken(req.query.code, function (err, tokens) {
        oauth2.setCredentials(tokens);
        res.end();
    });
});

app.get('/api/calendars', function (req, res) {
    getCalendar().calendarList.list(null, function (err, data) {
        res.json(data);
    });
});

app.get('/api/calendar/:id', function (req, res) {
    getCalendar().calendarList.get({calendarId: req.params.id}, function (err, data) {
        res.json(data);
    });
});

app.listen(8081, function () {
    console.log('Listening on port 8081.');
});