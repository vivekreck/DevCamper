const express = require('express');
const dotenv = require('dotenv');

// Route files
const bootcamps = require('./routes/bootcamps.routes');

// Load env vars
dotenv.config({ path: './configs/config.env' });

const app = express();

// Call routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 8080;

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);