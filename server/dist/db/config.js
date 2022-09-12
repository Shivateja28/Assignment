"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const questionsRoutes_1 = require("../models/questionsRoutes");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "mysql",
    database: "todo",
    logging: false,
    models: [questionsRoutes_1.Questions],
});
exports.default = connection;
