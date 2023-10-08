import { DataTypes } from 'sequelize'
import db from '../db/connection'

const User = db.define('User', {
  login: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  node_id: {
    type: DataTypes.STRING
  },
  avatar_url: {
    type: DataTypes.STRING
  },
  gravatar_id: {
    type: DataTypes.STRING
  },
  url: {
    type: DataTypes.STRING
  },
  html_url: {
    type: DataTypes.STRING
  },
  followers_url: {
    type: DataTypes.STRING
  },
  following_url: {
    type: DataTypes.STRING
  },
  gists_url: {
    type: DataTypes.STRING
  },
  starred_url: {
    type: DataTypes.STRING
  },
  subscriptions_url: {
    type: DataTypes.STRING
  },
  organizations_url: {
    type: DataTypes.STRING
  },
  repos_url: {
    type: DataTypes.STRING
  },
  events_url: {
    type: DataTypes.STRING
  },
  received_events_url: {
    type: DataTypes.STRING
  },
  type: {
    type: DataTypes.STRING
  },
  site_admin: {
    type: DataTypes.BOOLEAN
  },
  name: {
    type: DataTypes.STRING
  },
  company: {
    type: DataTypes.STRING
  },
  blog: {
    type: DataTypes.STRING
  },
  location: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  hireable: {
    type: DataTypes.BOOLEAN
  },
  bio: {
    type: DataTypes.TEXT
  },
  twitter_username: {
    type: DataTypes.STRING
  },
  public_repos: {
    type: DataTypes.INTEGER
  },
  public_gists: {
    type: DataTypes.INTEGER
  },
  followers: {
    type: DataTypes.INTEGER
  },
  following: {
    type: DataTypes.INTEGER
  },
  created_at: {
    type: DataTypes.DATE
  },
  updated_at: {
    type: DataTypes.DATE
  }
})

export default User
