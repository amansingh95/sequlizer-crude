const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser= require('body-parser');
const path = require('path');
const app = express();

const db=require('./config/db');


// test db
db.authenticate() .then(()=> console.log('database connected...'))
.catch(err => console.log('error'+ err))

app.use('/gigs',require('./routes/gigs'));
app.get('/', (req, res)=> res.send('INDEX'));

const PORT= process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
