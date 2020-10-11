const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const port = 5000;


app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

const calcHistory = require('./modules/history.js');

app.get('/calcHistory', (req, res) => {
    res.send(calcHistory);
    console.log(calcHistory);
});

app.post('/calcHistory', (req, res) => {
    console.log(req.body);
    calcHistory.push(req.body);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log('Up and running on port: ', port);
});