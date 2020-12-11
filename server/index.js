const express = require('express');
const dbConnnection = require('./database/config');
const cors = require('cors');
require('dotenv').config();
const app = express();

dbConnnection();

app.use( cors() );

app.use( express.static('public') );

app.use( express.json() );

app.use('/api/adminauth', require('./routes/adminAuth') );

app.listen( process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`);
} );