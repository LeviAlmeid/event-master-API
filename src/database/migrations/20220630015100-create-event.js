'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      return queryInterface.createTable('events', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'users', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        linkPicture: {
          type: Sequelize.STRING,
          allowNull: true
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false
        },
        date: {
          type: Sequelize.DATE
        },
        startAt: {
          type: Sequelize.STRING,
          allowNull: false
        },
        finishAt: {
          type: Sequelize.STRING,
          allowNull: false
        },
        createdAt:{
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt:{
          type: Sequelize.DATE,
          allowNull: false
        }
      });
  },

  async down (queryInterface, Sequelize) {

      return queryInterface.dropTable('events');

  }
};
