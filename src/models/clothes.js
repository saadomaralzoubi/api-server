"use strict";

const clothes = (sequelize, DataTypes) =>
  sequelize.define("clothes", {
    clothesType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clothesBrand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

module.exports = clothes;
