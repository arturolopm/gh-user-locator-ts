import { DataTypes } from 'sequelize'
import db from '../db/connection'

const User = db.define('User', {
  userName: {
    type: DataTypes.STRING
  }
})

export default User
