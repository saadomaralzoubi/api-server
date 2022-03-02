"use strict";
const express = require("express");
const { foodCollection } = require("../models/index.js");
const routers = express.Router();

routers.get("/food", getFood);
routers.post("/food", addfood);
routers.get("/food/:id", getFoodById);
routers.delete("/food/:id", deleteFood);
routers.put("/food/:id", updatedfood);

async function getFood(req, res) {
  let allFood = await foodCollection.readRecord();
  res.status(200).json(allFood);
}

async function addfood(req, res) {
  let newFood = req.body;
  let addedfood = await foodCollection.createRecord(newFood);
  res.status(201).json(addedfood);
}
async function getFoodById(req, res) {
  let addId = parseInt(req.params.id);
  let target = await foodCollection.readRecord(addId);
  res.status(200).json(target);
}

async function deleteFood(req, res) {
  let deletedId = parseInt(req.params.id);
  let deletedfood = await foodCollection.deleteRecord(deletedId);
  res.status(204).json(deletedfood);
}

async function updatedfood(req, res) {
  let body = req.body;
  let id = req.params.id;
  const Updatedfood = await foodCollection.updateRecord(body, id);
  res.status(201).json(Updatedfood);
}

module.exports = routers;
