'use strict';
module.exports = (sequelize, DataTypes) => {
  const exerciselog = sequelize.define('exerciselog', {
    userId: DataTypes.INTEGER,
    log: DataTypes.JSON
  }, {});
  exerciselog.associate = function(models) {
    // associations can be defined here
  };
  return exerciselog;
};