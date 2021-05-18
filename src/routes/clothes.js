'use strict';
const express = require('express');
const Clothes = require('../models/clothes.js');
const food = new Clothes();
const router = express.Router();

router.get('/',getAllClothes);
router.get('/:id',getSpecficClothes);
router.post('/',addClothes);
router.put('/:id',updateClothes);
router.delete('/:id',deleteClothes);

function getAllClothes(req,res){
  const resObj = food.read();
  res.status(200).json(resObj);
}

function getSpecficClothes(req,res){
  const resObj = food.read(req.params.id);
  res.status(200).json(resObj);
}

function addClothes(req,res){
  const foodObj = req.body;
  const resObj = food.create(foodObj);
  res.status(201).json(resObj);
}

function updateClothes(req,res){
  const foodObj = req.body;
  const resObj = food.update(req.params.id,foodObj);
  res.status(200).json(resObj);
}

function deleteClothes(req,res){
  const resObj = food.delete(req.params.id);
  res.status(200).json(resObj);
}

module.exports = router;