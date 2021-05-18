'use strict';
const express = require('express');
const Food = require('../models/food.js');
const food = new Food();
const router = express.Router();

router.get('/',getAllFood);
router.get('/:id',getSpecficFood);
router.post('/',addFood);
router.put('/:id',updateFood);
router.delete('/:id',deleteFood);

function getAllFood(req,res){
  const resObj = food.read();
  res.status(200).json(resObj);
}

function getSpecficFood(req,res){
  const resObj = food.read(req.params.id);
  res.status(200).json(resObj);
}

function addFood(req,res){
  const foodObj = req.body;
  const resObj = food.create(foodObj);
  res.status(201).json(resObj);
}

function updateFood(req,res){
  const foodObj = req.body;
  const resObj = food.update(req.params.id,foodObj);
  res.status(200).json(resObj);
}

function deleteFood(req,res){
  const resObj = food.delete(req.params.id);
  res.status(200).json(resObj);
}

module.exports = router;