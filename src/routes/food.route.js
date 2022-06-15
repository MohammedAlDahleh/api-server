'use strict';
const express = require('express');

const { foodTable } = require('../models/index.models');

const foodRouter = express.Router();


foodRouter.get('/food', getFoods);
foodRouter.get('/food/:id', getOneFood);
foodRouter.post('/food', addFood);
foodRouter.put('/food/:id', updateFood);
foodRouter.delete('/food/:id', deleteFood);


async function getFoods(req, res) {
  let foods = await foodTable.read();
  res.status(200).json(foods);
}
async function getOneFood(req, res) {
  let food_Id = parseInt(req.params.id);
  let food = await foodTable.read(food_Id);
  res.status(200).json(food);
}
async function addFood(req, res) {
  let newFood = req.body;
  let food = await foodTable.create(newFood);
  res.status(201).json(food);
}
async function updateFood(req, res) {
  let food_Id = parseInt(req.params.id);
  console.log("food ID = ",food_Id);
  let updateFood = req.body;
  console.log("update Food = ",updateFood);
  let foundFood = await foodTable.read(food_Id);
  console.log("found food", foundFood);
  if (foundFood) {
    console.log("inside IF");
    let updatedFood = await foundFood.update(updateFood);
    
    console.log("updat food ", updatedFood);
    res.status(201).json(updatedFood);
  } else {
    console.log("inside else");
    res.status(404).json({ message: 'Not found' });
  }
  console.log("finshid");
}
async function deleteFood(req, res) {
  let food_Id = parseInt(req.params.id);
  let foundFood = await foodTable.read(food_Id);
  if (foundFood) {
    let deletedFood = await foodTable.delete(food_Id);
    res.status(204).json(deletedFood);
  } else {
    res.status(404).json({ message: 'Not found' });
  }
}

module.exports = foodRouter;