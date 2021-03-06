const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./configs/db')
const errorHandler = require('./middleware/error');
const fileupload = require('express-fileupload')

// Load env vars
dotenv.config({ path: './configs/config.env' });

// Connect to database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps.routes');
const courses = require('./routes/courses.routes');

const app = express();

// Body parser
app.use(express.json())

// File uploading
app.use(fileupload());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Call routers
app.use('/api/v1/bootcamps', bootcamps);
app.use('/api/v1/courses', courses);

// error handler added
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
    // Close server & exit process
    server.close(() => process.exit(1));
})