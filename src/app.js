const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const mongosse =  require('mongoose');

//connecting db

mongosse.connect('mongodb://localhost/crud-mongo')
.then(db=>console.log('DB Connected'))
.catch(err => console.log(err));

// importing routers

const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');

// middlewares .. false solo txt
app.use(morgan('dev')); 
app.use(express.urlencoded({extended:false}));


// routes
app.use('/',indexRoutes);


// starting the server
app.listen(app.get('port'),()=>{
 console.log(`server on port ${app.get('port')}`);
});

