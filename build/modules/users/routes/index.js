"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const users_get_1 = require("./users-get");
const UsersRoutes = express.Router();
UsersRoutes.get('/', users_get_1.getAllUsers);
exports.default = UsersRoutes;
