
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use('/app', express.static('app'));
app.use('/app/lib', express.static('app/lib'));
app.use('/content', express.static('content'));
app.use('/content/css', express.static('content/css'));
app.use('/content/img', express.static('content/img'));
app.use('/data', express.static('data'));
app.use('/views', express.static('views'));
app.use('/views', express.static('header'));
app.use(bodyParser.json());


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


app.listen(3000, function(){
    console.log('server running');
});