"use strict";
const { Topic } = require("../../app/models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const topics = await Topic.findAll();
    const requests = topics.map((item) => {
      return Topic.update(
        {
          smallTopic: item.topic.toLowerCase(),
        },
        {
          where: { id: item.id },
        }
      );
    });
    await Promise.all(requests);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
