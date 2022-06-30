const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../model/User')
const Event = require('../model/Event')

const connection = new Sequelize(dbConfig);

User.init(connection)
Event.init(connection)


User.associate(connection.models)
Event.associate(connection.models)

module.exports = connection;