const express = require("express");
const mongoose = require("mongoose");
const seedIntegrationData = require("./seeders/integrationSeeder");
const http = require('http');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// Create an Express application
const app = express();

// Connect to MongoDB database
mongoose
  .connect("mongodb://localhost:27017/salesforcecrmsystems1", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    seedIntegrationData();
    console.log("Connected to MongoDB database");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Get port from environment and store in Express
const port = normalizePort(process.env.PORT || "8000");
app.set("port", port);

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(logger('dev'));

// Routes
const contactRoutes = require("./routes/contactRoutes");
const blogRoutes = require("./routes/blogRoutes");
const tagsRoutes = require("./routes/tags"); // Add tags routes
const categoriesRoutes = require("./routes/categories"); // Add categories routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const integrationRoutes = require('./routes/integration');
const paymentRoutes = require('./routes/payment'); // Require payment routes

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/api", contactRoutes);
app.use("/api", blogRoutes);
app.use("/api", tagsRoutes); // Use tags routes
app.use("/api", categoriesRoutes); // Use categories routes
app.use("/api", integrationRoutes); // Use integration routes
app.use("/api", paymentRoutes); // Use payment routes

// 404 error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

// Start the HTTP server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
