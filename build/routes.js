"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./modules/users/routes/index");
const urlBase = '/api/v1';
const allRoutes = (server) => {
    server.use(`${urlBase}/users`, index_1.default);
    // Default route errorhandler
    server.use(function (req, res, next) {
        res.status(500).json({
            status: 500,
            msg: `Error on route. This route exist?`,
            route: req.originalUrl
        });
        next();
    });
};
exports.default = allRoutes;
