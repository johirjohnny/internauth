// Required packages and modueles
const express = require("express");
const InitiateMongoServer = require("./config/db");
const baseRouter = require('./routes')
const authRoute = require("./routes/authentication")

// Initiate Mongo Server
InitiateMongoServer();

// Initiate Express App
const app = express();

// Define PORT
const PORT = parseInt(process.env.PORT, 10) || 4000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Router Middleware
 * Router - /api/*
 * Method - *
 */

//MY Code for get the posted data 
// app.use("/api", baseRouter);
app.use("/auth", authRoute);
// Boot express server
app.listen(PORT, () => {
  console.log(`Server Booted at PORT ${PORT}`);
});