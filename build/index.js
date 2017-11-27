"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const jwt = require("express-jwt");
const session = require("express-session");
const helmet = require("helmet");
const mongoose = require("mongoose");
const passport = require("passport");
const unlessPath_1 = require("./config/unlessPath");
const routes_1 = require("./routes");
const server = express();
const PORT = process.env.PORT || 3000;
// set environment
const config = require('./config');
/**
 * Node.js body parsing middleware.
 * https://github.com/expressjs/body-parser
 */
server.use(BodyParser.urlencoded({ extended: true }));
server.use(BodyParser.json());
/**
 * CORS is a node.js package for providing a Connect/Express middleware that
 * can be used to enable CORS with various options.
 * https://github.com/expressjs/cors
 */
server.use(cors());
// Sessions
server.use(session({ secret: config.jwtSecret, resave: true, saveUninitialized: true }));
// PassportJS
server.use(passport.initialize());
server.use(passport.session());
/**
 * Helmet helps you secure your Express apps by setting various HTTP headers.
 * https://github.com/helmetjs/helmet
 */
server.use(helmet());
// Mongoose
mongoose.Promise = global.Promise;
mongoose
    .connect(config.mongoDB, { useMongoClient: true })
    .then(() => console.log('Conected on MongoDB'), err => console.log(err));
/**
 * Some libs an configs, can run only in development mode.
 */
if (process.env.NODE_ENV !== 'production') {
    /**
     * HTTP request logger middleware for node.js
     * https://github.com/expressjs/morgan
     */
    const morgan = require('morgan');
    server.use(morgan('dev'));
    /**
     * Show documentation on dev mode
     * Show run app client on dev mode
     */
    server.use('/doc', express.static('src/public/doc'));
    server.use('/', express.static('src/public/app'));
    server.use('/app', express.static('src/public/app'));
}
else {
    // All resources inside `else` statement, will be available only production mode.
    /**
     * Show documentation on production mode
     * Show run app client on production mode
     */
    server.use('/doc', express.static('build/public/doc'));
    server.use('/', express.static('build/public/app'));
    server.use('/app', express.static('build/public/app'));
    /**
     * Protect all routes.
     * Routes includes in `./config/unlessPath.ts` don't will be not protected.
     */
    server.use(jwt({ secret: config.jwtSecret }).unless(unlessPath_1.unlessPath));
}
// Default error
server.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('login Error');
    }
});
/**
 * Set all routes in application
 */
routes_1.default(server);
/**
 * Run server on setted port
 * Show wich mode is running
 */
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode.`);
});
/**
 * Export `express instance` for use in tests environment
 */
exports.default = server;
