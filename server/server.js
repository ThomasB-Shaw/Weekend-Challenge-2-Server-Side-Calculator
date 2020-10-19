const express = require ('express');
const bodyParser = require ('body-parser');
const mathRouter = require('./routes/math_router.js');

const app = express();
const port = 5000;


app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use('/math', mathRouter);

app.listen(port, () => {
    console.log('Up and running on port: ', port);
});

