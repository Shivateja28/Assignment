import { Sequelize } from "sequelize-typescript";
import { Questions } from "../models/questionsRoutes";

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "mysql",
    database: "todo",
    logging: false,
    models: [Questions],
})

export default connection;