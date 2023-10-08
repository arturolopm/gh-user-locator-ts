import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

const dbname = process.env.DB_NAME || 'mydb'
const dbUser = process.env.DB_USER || 'root'
const dbPass = process.env.DB_PASS || 'root'
const dbHost = process.env.DB_HOST || 'localhost'

console.log(dbname, dbUser, dbPass, dbHost)

const db = new Sequelize(dbname!, dbUser!, dbPass!, {
  host: dbHost,
  port: 3306,
  dialect: 'mysql'
})
// Function to create the database if it doesn't exist
const createDatabaseIfNotExists = async () => {
  try {
    await db.query('CREATE DATABASE IF NOT EXISTS mydb;')
    console.log('Database created or successfully checked.')
  } catch (error) {
    console.error('Error creating database:', error)
  }
}

// Create the database if it doesn't exist
createDatabaseIfNotExists()

export default db
