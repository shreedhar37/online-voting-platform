"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addColumn("Elections", "voter_id", {
      type: Sequelize.DataTypes.INTEGER,
    });
    queryInterface.addConstraint("Elections", {
      fields: ["voter_id"],
      type: "foreign key",
      references: {
        table: "Voters",
        field: "voter_id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Elections", "voter_id");

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
