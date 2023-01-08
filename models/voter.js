"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Voter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Voter.belongsTo(models.Election, {
        foreignKey: "electionId",
      });
    }
  }
  Voter.init(
    {
      voter_id: DataTypes.INTEGER,
      password: DataTypes.STRING,
      voted: DataTypes.BOOLEAN,
      responses: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    {
      sequelize,
      modelName: "Voter",
    }
  );
  return Voter;
};
