//random change
'use strict';

const express = require('express');
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const session = require('express-session');

// load express
const app = express();

// // Add express sesssion middleware
// app.use(session({
// 	secret: 'oursecret',
// 	resave: false,
// 	saveUninitialized: false,
// 	cookie: {
// 		expires: 86400000,
// 		httpOnly: true
// 	}
// }));

app.use(express.static(__dirname));
app.use(bodyParser.json());

// get Routes
app.get('/', (req, res) => {
    console.log("get request received");
	res.status(200).sendFile(__dirname + "/login.html");
});

app.get('/login/1002421140', (req, res) => {
    console.log(__dirname + "/patient.html");
    res.status(200).sendFile(__dirname + "/patient.html");
});

app.get('/login/1002108587', (req, res) => {
    console.log("hit 2");
    res.status(200).sendFile(__dirname + "/add_prescription.html");
});

app.get('/patient', (req, res) => {
    const fs = require('fs');

    let raw_data = fs.readFileSync("./patient.json");
    let patient = JSON.parse(raw_data);
  
    res.send(patient[0]);
});

app.post('/patient', (req, res) => {
	const symptom = req.body.symptom;
	const date = req.body.date;

    const fs = require('fs');

    let raw_data = fs.readFileSync("./patient.json");
    let patient = JSON.parse(raw_data);
  
    patient[0].symptom.push([symptom, date]);
    let write_data = JSON.stringify(patient);
    fs.writeFileSync('./patient.json', write_data);
});

app.post('/prescription', (req, res) => {
	const prescription = req.body.prescription;
	const date = req.body.date;

    const fs = require('fs');

    let raw_data = fs.readFileSync("./patient.json");
    let patient = JSON.parse(raw_data);
  
    patient[0].prescription.push([prescription, date]);
    let write_data = JSON.stringify(patient);
    fs.writeFileSync('./patient.json', write_data);
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
