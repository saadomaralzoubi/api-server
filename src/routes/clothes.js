"use strict";
const express = require("express");
const { clothesCollection } = require("../models/index.js");
const routers = express.Router();

routers.get("/clothes", getClothes);
routers.post("/clothes", addClothes);
routers.get("/clothes/:id", getClothesById);
routers.delete("/clothes/:id", deleteClothes);
routers.put("/clothes/:id", updatedClothes);

async function getClothes(req, res) {
  let allClothes = await clothesCollection.readRecord();
  res.status(200).json(allClothes);
}

async function addClothes(req, res) {
  let newclothes = req.body;
  let addclothes = await clothesCollection.createRecord(newclothes);
  res.status(201).json(addclothes);
}
async function getClothesById(req, res) {
  let addedId = parseInt(req.params.id);
  let target = await clothesCollection.readRecord(addedId);
  res.status(200).json(target);
}

async function deleteClothes(req, res) {
  let deletedId = parseInt(req.params.id);
  let deletedClothes = await clothesCollection.deleteRecord(deletedId);
  res.status(204).json(deletedClothes);
}

async function updatedClothes(req, res) {
  let body = req.body;
  let id = req.params.id;
  const UpdatedClothes = await clothesCollection.updateRecord(body, id);
  res.status(201).json(UpdatedClothes);
}

module.exports = routers;
