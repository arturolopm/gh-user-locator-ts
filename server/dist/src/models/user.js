"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const User = connection_1.default.define('User', {
    login: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true
    },
    node_id: {
        type: sequelize_1.DataTypes.STRING
    },
    avatar_url: {
        type: sequelize_1.DataTypes.STRING
    },
    gravatar_id: {
        type: sequelize_1.DataTypes.STRING
    },
    url: {
        type: sequelize_1.DataTypes.STRING
    },
    html_url: {
        type: sequelize_1.DataTypes.STRING
    },
    followers_url: {
        type: sequelize_1.DataTypes.STRING
    },
    following_url: {
        type: sequelize_1.DataTypes.STRING
    },
    gists_url: {
        type: sequelize_1.DataTypes.STRING
    },
    starred_url: {
        type: sequelize_1.DataTypes.STRING
    },
    subscriptions_url: {
        type: sequelize_1.DataTypes.STRING
    },
    organizations_url: {
        type: sequelize_1.DataTypes.STRING
    },
    repos_url: {
        type: sequelize_1.DataTypes.STRING
    },
    events_url: {
        type: sequelize_1.DataTypes.STRING
    },
    received_events_url: {
        type: sequelize_1.DataTypes.STRING
    },
    type: {
        type: sequelize_1.DataTypes.STRING
    },
    site_admin: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    },
    company: {
        type: sequelize_1.DataTypes.STRING
    },
    blog: {
        type: sequelize_1.DataTypes.STRING
    },
    location: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    hireable: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    bio: {
        type: sequelize_1.DataTypes.TEXT
    },
    twitter_username: {
        type: sequelize_1.DataTypes.STRING
    },
    public_repos: {
        type: sequelize_1.DataTypes.INTEGER
    },
    public_gists: {
        type: sequelize_1.DataTypes.INTEGER
    },
    followers: {
        type: sequelize_1.DataTypes.INTEGER
    },
    following: {
        type: sequelize_1.DataTypes.INTEGER
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE
    }
});
exports.default = User;
//# sourceMappingURL=user.js.map