"use strict";
const { Sequelize, DataTypes } = require("sequelize");
const food = require("./food.js");
const clothes = require("./clothes");
const Collection = require("./collection-class");

require("dotenv").config();

const POSTGRES_URL =
  process.env.NODE_ENV === "test" ? "sqlite:memory:" : process.env.DATABASE_URL;

let sequelizeOptions =
  process.env.NODE_ENV === "production"
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};

let sequelize = new Sequelize(POSTGRES_URL, sequelizeOptions);
let foodModel = food(sequelize, DataTypes);
let clothesModel = clothes(sequelize, DataTypes);

let foodCollection = new Collection(foodModel);
let clothesCollection = new Collection(clothesModel);

module.exports = {
  db: sequelize,
  foodCollection: foodCollection,
  clothesCollection: clothesCollection,
};
