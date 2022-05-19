import "reflect-metadata";
import dotenv from 'dotenv';
import { DataSource } from "typeorm";

dotenv.config();

export const AppDataSource = new DataSource({
    type:     "mysql",
    host:     process.env.DB_HOST,
    port:     3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [
        "src/entities/*.ts"
    ],
    migrations: [
        "src/database/migrations/*.ts"
    ]
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })