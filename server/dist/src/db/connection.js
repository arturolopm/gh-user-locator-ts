"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './.env' });
const dbname = process.env.DB_NAME || 'mydb';
const dbUser = process.env.DB_USER || 'root';
const dbPass = process.env.DB_PASS || 'root';
const dbHost = process.env.DB_HOST || 'localhost';
console.log(dbname, dbUser, dbPass, dbHost);
const db = new sequelize_1.Sequelize(dbname, dbUser, dbPass, {
    host: dbHost,
    port: 3306,
    dialect: 'mysql'
});
// Function to create the database if it doesn't exist
const createDatabaseIfNotExists = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db.query('CREATE DATABASE IF NOT EXISTS mydb;');
        console.log('Database created or successfully checked.');
    }
    catch (error) {
        console.error('Error creating database:', error);
    }
});
// Create the database if it doesn't exist
createDatabaseIfNotExists();
exports.default = db;
//# sourceMappingURL=connection.js.map