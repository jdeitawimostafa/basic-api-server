'use strict';

const uuid = require('uuid').v4;

class Food {

  constructor(){
    this.foodDb = [];
  }

  read(id){
    if(id){
      return this.foodDb.find((data) => data.id === id);
    }
    else{
      return this.foodDb;
    }
  }

  create(object){
    const food = {
      id: uuid(),
      data: object,
    };
    this.foodDb.push(food);
    return food;
  }

  delete(id){
    this.foodDb = this.foodDb.filter((food) => food.id !== id);
    return this.foodDb;
  }

  update(id, object) {
    for (let i = 0; i < this.foodDb.length; i++) {
      let f = this.foodDb[i];
      if(f.id === id) {
        this.foodDb[i].data = object;
        return this.foodDb[i];
      } 
    }
  }

}

module.exports = Food;