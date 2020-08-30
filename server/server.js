const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// const cors = require("cors");
const contactRoutes = require("./routes/ContactRoutes");

// Import DB Configuration
require("./config/DatabaseConfig");

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cors());
app.use(express.static(path.join(__dirname, "dist/drj-profile")));
app.use("/", express.static(path.join(__dirname, "dist/drj-profile")));
app.use("/api", contactRoutes);

app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

// Find 404 and hand over to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//  console.error(err.message); // Log error message in our server's console
//  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
//  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
// });
