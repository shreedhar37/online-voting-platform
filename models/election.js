"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Election extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Election.belongsTo(models.Admin, {
        foreignKey: "adminId",
      });

      Election.hasMany(models.Question, {
        foreignKey: "questionId",
      });

      Election.hasMany(models.Voter, {
        foreignKey: "voter_id",
      });
    }
  }
  Election.init(
    {
      name: DataTypes.STRING,
      live: DataTypes.BOOLEAN,
      ended: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Election",
    }
  );
  return Election;
};
